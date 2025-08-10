window.onload = () => {

  const form = document.getElementById('postForm')
  const textarea = document.getElementById('postCom')

  form.onsubmit = async (e) => {
    e.preventDefault()

    const text = textarea.value
    const resultText = document.getElementById('result')
    resultText.textContent = 'posting...'
      resultText.classList.add('posting')
    
    try {
      await window.bsky.post(text)
      resultText.textContent = 'success!'
      resultText.classList.add('success')
      resultText.classList.remove('posting')
      window.close()
    } catch (err) {
      resultText.textContent = 'error: ' + err.message
      resultText.classList.add('error')
      resultText.classList.remove('posting')
    }
  }

  //キーボード入力でも投稿できるようにする（Mac:⌘, Windows: Ctrl）
  textarea.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      form.requestSubmit()
    }
  })
}