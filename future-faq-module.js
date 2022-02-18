// Template for future use when using a framework to generate page items

const qaList = [
  {
    question: "What is Crypto Gecks?",
    answer: "Lorem ipsum"
  }
];

qaList.forEach(qaItem => {
  <div class="inner-content">
  <h2 class="box-header">{qaItem.question || ''}</h2>
  <br />
  <h3 class="Title">
    {qaItem.answer || ''}
  </h3>
</div>
});