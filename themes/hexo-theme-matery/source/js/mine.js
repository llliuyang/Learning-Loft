function loadPoem(result) {
  let sentence = document.querySelector("#poem_sentence")
  let info = document.querySelector("#poem_info")
  sentence.textContent = result.data.content
  info.textContent = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
}
