const chatBox = document.getElementById("chatBox")

const config = { attributes: false, childList: true, subtree: false };



const callBack = function (mutationsList, observer) {
    var messages = document.getElementsByClassName('message');
    //console.log(messages);
    for (var i = 0; i < messages.length; i++) {
        //console.log(messages[i]);

        if (messages[i].classList.contains('incoming')) {
            if (i == messages.length - 1) {
                messages[i].classList.add('last');
                return;
            }
            if (messages[i + 1].classList.contains('outgoing')) {
                messages[i].classList.add('last');
            }
            else {

                messages[i].classList.remove('last');
            }
        }
        else if (messages[i].classList.contains('outgoing')) {
            if (i == messages.length - 1) {

                messages[i].classList.add('last');
                return;
            }
            if (messages[i + 1].classList.contains('incoming')) {

                messages[i].classList.add('last');
            }
            else {

                messages[i].classList.remove('last');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', callBack);

const observer = new MutationObserver(callBack);

observer.observe(chatBox, config);
