

const codeReader = new ZXing.BrowserMultiFormatReader()
console.log('ZXing code reader initialized')




codeReader
  .decodeFromInputVideoDevice(undefined, 'video')
  .then((result) => {
    // process the result

    document.getElementById('beep-audio').play()

    return result





  }).then((result) => {
    console.log(result.text)
    document.getElementById('result').textContent = result.text

    // setTimeout(function(){window.location.replace(result.text)} , 550);

  })
  .catch(err => console.error(err));
