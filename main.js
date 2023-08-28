// console.log('Hello')

const editableInput = document.querySelector(".editable");

const placeholder = document.querySelector(".placeholder");

const counter = document.querySelector(".counter");

const tweetButton = document.querySelector(".button");

const readonly = document.querySelector(".readonly");

editableInput.onfocus = () => {
  placeholder.style.color = "#c5ccd3";
};

editableInput.onblur = () => {
  placeholder.style.color = "#98a5b1";
};

editableInput.onkeypress = (e) => {
  //console.log(e);
  //placeholder.style.display='none'
  validateTweet(e.target);
};

editableInput.onkeyup = (e) => {
  // placeholder.style.display='flex'
  validateTweet(e.target);
};

const validateTweet = (element) => {
  let tweetLength = element.innerText.length;
  //console.log(tweetLength);

  let text;

  let tweetLimit = 15;

  if (tweetLength <= 0) {
    placeholder.style.display = "flex";
    counter.style.display = "none";
    tweetButton.classList.remove("active");
  } else {
    counter.style.display = "block";
    placeholder.style.display = "none";
    tweetButton.classList.add("active");
  }

  counter.innerHTML = tweetLimit - tweetLength;

  if (tweetLength > tweetLimit) {
    let overText = element.innerText.substr(tweetLimit, tweetLength);

    overText = `<span class="overSpan">${overText}</span>`;
    text = element.innerText.substr(0, tweetLimit) + overText;
    readonly.style.zIndex = "1";

    tweetButton.classList.remove("active");

    counter.style.color = "#e0245e";
  } else {
    counter.style.color = "#333";
  }

  readonly.innerHTML = text;
};
