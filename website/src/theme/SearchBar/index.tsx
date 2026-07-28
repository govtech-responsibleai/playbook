import type {
  DocSearchHit,
  DocSearchTransformClient,
} from '@docsearch/react';
import OriginalSearchBar from '@theme-original/SearchBar';
import React from 'react';

type AlgoliaHighlight = {
  fullyHighlighted?: boolean;
  matchLevel: 'full' | 'none' | 'partial';
  matchedWords: string[];
  value: string;
};

type PlaybookHit = {
  objectID: string;
  title?: string;
  description?: string;
  content?: string;
  url?: string;
  headers?: string[];
  _highlightResult?: {
    title?: AlgoliaHighlight;
    description?: AlgoliaHighlight;
    content?: AlgoliaHighlight;
  };
  _snippetResult?: {
    description?: AlgoliaHighlight;
    content?: AlgoliaHighlight;
  };
};

const emptyHighlight = (value: string): AlgoliaHighlight => ({
  value,
  matchLevel: 'none',
  matchedWords: [],
});

/**
 * The current Algolia crawler emits page records rather than DocSearch's
 * hierarchy records. Adapt only the data shape so the UI remains the official
 * DocSearch interface.
 */
const toDocSearchHit = (hit: PlaybookHit): DocSearchHit => {
  const title = hit.title ?? 'Responsible AI Playbook';
  const content = hit.description ?? hit.content ?? '';
  const url = hit.url ?? '/';
  const parsedUrl = new URL(url, window.location.origin);
  const titleHighlight =
    hit._highlightResult?.title ?? emptyHighlight(title);
  const contentHighlight =
    hit._highlightResult?.description ??
    hit._highlightResult?.content ??
    emptyHighlight(content);
  const contentSnippet =
    hit._snippetResult?.description ??
    hit._snippetResult?.content ??
    contentHighlight;
  const empty = emptyHighlight('');

  return {
    ...hit,
    objectID: hit.objectID,
    content,
    url,
    url_without_anchor: `${parsedUrl.origin}${parsedUrl.pathname}${parsedUrl.search}`,
    anchor: parsedUrl.hash.slice(1) || null,
    type: 'content',
    hierarchy: {
      lvl0: title,
      lvl1: hit.headers?.[0] ?? title,
      lvl2: null,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null,
    },
    _highlightResult: {
      content: contentHighlight,
      hierarchy: {
        lvl0: titleHighlight,
        lvl1: hit.headers?.[0]
          ? emptyHighlight(hit.headers[0])
          : titleHighlight,
        lvl2: empty,
        lvl3: empty,
        lvl4: empty,
        lvl5: empty,
        lvl6: empty,
      },
      hierarchy_camel: [],
    },
    _snippetResult: {
      content: contentSnippet,
      hierarchy: {
        lvl0: titleHighlight,
        lvl1: hit.headers?.[0]
          ? emptyHighlight(hit.headers[0])
          : titleHighlight,
        lvl2: empty,
        lvl3: empty,
        lvl4: empty,
        lvl5: empty,
        lvl6: empty,
      },
      hierarchy_camel: [],
    },
  };
};

const adaptSearchClient = (
  searchClient: DocSearchTransformClient,
): DocSearchTransformClient => {
  const search = (async (
    searchMethodParams: Parameters<DocSearchTransformClient['search']>[0],
    requestOptions?: Parameters<DocSearchTransformClient['search']>[1],
  ) => {
    const requests =
      'requests' in searchMethodParams
        ? searchMethodParams.requests.map((request) => {
            return {
              ...request,
              restrictSearchableAttributes: undefined,
              attributesToRetrieve: [
                'objectID',
                'title',
                'description',
                'content',
                'url',
                'headers',
              ],
              attributesToHighlight: ['title', 'description', 'content'],
              attributesToSnippet: ['description:18', 'content:18'],
            };
          })
        : searchMethodParams;

    const response = await searchClient.search(
      'requests' in searchMethodParams
        ? {...searchMethodParams, requests}
        : searchMethodParams,
      requestOptions,
    );

    return {
      ...response,
      results: response.results.map((result) =>
        'hits' in result && Array.isArray(result.hits)
          ? {
              ...result,
              hits: result.hits.map((hit) =>
                toDocSearchHit(hit as PlaybookHit),
              ),
            }
          : result,
      ),
    };
  }) as DocSearchTransformClient['search'];

  return {
    ...searchClient,
    search,
  };
};

export default function SearchBar() {
  return <OriginalSearchBar transformSearchClient={adaptSearchClient} />;
}
