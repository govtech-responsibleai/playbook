# Human Evaluation 

Why human evaluation still matters.

## Alternative Annotator Test (Alt-Test)
The Alt-Test is one way to conduct robust evaluation of your LLM-as-a-judge. It reframes the goal of evaluation from "Is the model correct?" to "To what extent to LLMs concur with human annotations?"

Essentially, it is a **leave-one-annotator-out** hypothesis test that measures whether an LLM judge agrees with the remaining human consensus **at least as well as** the left-out human does.

How is this better than traditional metrics? Commonly used agreement measures (e.g. Cohen's kappa, Krippendorff) only assess agreement among annotators, and performance metrics (e.g. Accuracy, F1 Score) only evaluate whether the LLM matches human performance. 
The Alt-Test provides two key advantages:
- It is actionable: a high *winning rate* provides statistical evidence that the model can stand in for human annotators, and the *advantage probability* provides a measure to compare between models. 
- It captures the variability amongst humans themselves, accounting for the fact that humans disagree with each other. 

!!! note "The Test in Action"

    An hands-on implementation and extension of the Alt-Test can be found in this [blog post](https://medium.com/dsaid-govtech/validating-annotation-agreement-between-humans-and-llms-bc334245b1d9).

For more details, see the [original Alt-Test paper](https://arxiv.org/abs/2501.10970).



