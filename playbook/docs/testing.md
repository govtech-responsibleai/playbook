# Testing

## What is testing?
Testing (possibly also known as "evaluations") is the process of 
1. establishing risk categories of interest
2. creating and defining benchmarks
3. measuring a system's performance against this benchmark

in order to ensure that the system is accurate, reliable and robust.

![Evals](images/testing_progression.png)
_Figure: Stages of testing maturity in AI systems._

We can think of testing maturity in stages. We want to be at level 4, where testing is comprehensive and automated. However, based on our knowledge, level 1-level 3 testing are most commonly adopted in the industry today. This is largely due to the difficulty in measuring how good/trusted/comprehensive the testing benchmark is. Nonetheless, as SOTA moves towards level 4, we believe that we can gradually level up WOG testing of AI systems. 

## Safety Testing

Safety testing is crucial for generative AI applications because their stochastic nature can produce unpredictable and potentially harmful outputs. Ensuring these systems operate within safe boundaries helps mitigate safety risks in WOG applications. 

See [safety_testing](safety_testing/safety_testing.md) for more details. 

## Fairness Testing

While outputs are constrained and more predictable in discriminative AI applications, they can nonetheless disproportionately impact certain groups based on protected and sensitive attributes like race or gender. Hence, significant work have been done to establish fairness testing and metrics in discrminative AI. 

(to be added)

Similarly, fairness testing is essential in generative AI to ensure that outputs do not perpetuate biases or discriminate against specific groups. This is especially due to the fact that LLMs have been trained on Internet data, which are known to contain biases. 

See [fairness_testing_generative](fairness_testing/fairness_generative.md) for more details. 
