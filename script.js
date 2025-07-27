
(function(){
  const parasSel = document.getElementById('li-paragraphs');
  const sentsSel = document.getElementById('li-sentences');
  const btn       = document.getElementById('li-generate');
  const output    = document.getElementById('li-output');
  const counts    = document.getElementById('li-counts');

  const copyBtn   = document.getElementById('li-copy');      // ✅
  const downloadBtn = document.getElementById('li-download'); // ✅

  const baseSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Vivamus lacinia odio vitae vestibulum vestibulum.",
    "Cras vehicula, mi eget laoreet facilisis, sapien sapien luctus orci, a eleifend sapien nisi in augue.",
    "Fusce commodo justo et ligula consectetur, at dignissim sapien ultrices.",
    "Integer sit amet metus sit amet orci placerat hendrerit."
  ];

  function generateLorem(paras, sents) {
    const result = [];
    for (let p = 0; p < paras; p++) {
      let para = [];
      for (let i = 0; i < sents; i++) {
        para.push(baseSentences[(p * sents + i) % baseSentences.length]);
      }
      result.push(para.join(' '));
    }
    return result.join('\n\n');
  }

  function updateCounts(text){
    const trimmed = text.trim();
    if (!trimmed){ counts.textContent = ''; return; }
    const words = trimmed.split(/\s+/).length;
    const chars = trimmed.length;
    const sentences = (trimmed.match(/[.!?]+/g) || []).length;
    const lines = trimmed.split(/\n/).length;
    counts.textContent = `Words: ${words} | Characters: ${chars} | Sentences: ${sentences} | Lines: ${lines}`;
  }

  // ✅ Helper to enable/disable buttons
  function toggleButtons() {
    const hasText = output.value.trim().length > 0;
    copyBtn.disabled = !hasText;
    downloadBtn.disabled = !hasText;
  }

  btn.addEventListener('click', () => {
    const paras = parseInt(parasSel.value, 10);
    const sents = parseInt(sentsSel.value, 10);
    const text = generateLorem(paras, sents);
    output.value = text;
    updateCounts(text);
    toggleButtons(); // ✅ update state after generation
  });

  document.getElementById('li-copy').addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
  });

  document.getElementById('li-download').addEventListener('click', () => {
    const blob = new Blob([output.value], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ToolsMenia-lorem.txt';
    a.click();
  });

  document.getElementById('li-clear').addEventListener('click', () => {
    output.value = '';
    counts.textContent = '';
    toggleButtons(); // ✅ update state after clear
  });

  // ✅ Run initially to disable on load
  toggleButtons();

})();
