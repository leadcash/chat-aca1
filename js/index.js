function setVariables() {
    const phones = [
        {
            id: 'PrimaryNumber',
            dialNumber: '1234567890',
            display: '(123) 456-78-90',
        },
        {
            id: 'PrimaryNumber1',
            dialNumber: '',
            display: '',
        },
        {
            id: 'DownsellNumber',
            dialNumber: '',
            display: '',
        },
        {
            id: 'DownsellNumber1',
            dialNumber: '',
            display: '',
        },
    ];

    phones.forEach((item) => $(`#${item.id}`).attr('href', `tel:${item.dialNumber}`).text(item.display));
}

$(document).ready(function () {
    setVariables();

    setTimeout(function () {
        $('#initTyping').remove();
        $('#msg1').removeClass('hidden').after(typingEffect());
        setTimeout(function () {
            $('.temp-typing').remove();
            $('#msg2').removeClass('hidden').after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
                $('.temp-typing').remove();
                $('#msg3').removeClass('hidden').after(typingEffect());
                scrollToBottom();
                setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg4').removeClass('hidden');
                }, 0);
            }, 1750);
        }, 1250);
    }, 750);

    let buttonValue;
    let currentStep;

    $('button.chat-button').on('click', function () {
        currentStep = $(this).attr('data-form-step');
        buttonValue = $(this).attr('data-form-value');

        if (currentStep == 1) {
            //scrollToBottom();
            $('#agentBlock2 .agent-chat').prepend(typingEffect());
            $('#msg4').addClass('hidden');
            $('#userBlock1').removeClass('hidden');
            scrollToBottom();
            setTimeout(function () {
                $('#agentBlock2').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg6').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg7').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg8').removeClass('hidden');
                            scrollToBottom();
                        }, 0);
                    }, 1750);
                }, 2250);
            }, 50);
        }

        if (currentStep == 2) {
            //scrollToBottom();
            $('#agentBlock3 .agent-chat').prepend(typingEffect());
            $('#msg8').addClass('hidden');
            $('#userBlock2').removeClass('hidden');
            //scrollToBottom();
            if (buttonValue == 'No') {
                $('#msg9no').removeClass('hidden');
                $('#hdnApprovalStatus').val('no');
                $('#msg12medicare').removeClass('hidden');
                setTimeout(function () {
                    $('#agentBlock4').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg18').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg19').removeClass('hidden');
                            scrollToBottom();
                            setTimeout(function () {
                                $('#disconnected').removeClass('hidden');
                                scrollToBottom();
                            }, 1250);
                        }, 1250);
                    }, 1250);
                }, 1250);
                return false;
            } else {
                $('#msg9yes').removeClass('hidden');
            }
            scrollToBottom();
            setTimeout(function () {
                $('#agentBlock3').removeClass('hidden');
                scrollToBottom();
                setTimeout(function () {
                    $('.temp-typing').remove();
                    $('#msg10').removeClass('hidden').after(typingEffect());
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg11').removeClass('hidden');
                        scrollToBottom();
                    }, 0);
                }, 1750);
            }, 50);
        }

        if (currentStep == 3) {
            //scrollToBottom();
            $('#agentBlock4 .agent-chat .agent-chat-2 #agentBlock5').prepend(typingEffect());
            $('#msg11').addClass('hidden');
            $('#userBlock3').removeClass('hidden');
            //scrollToBottom();
            if (buttonValue == 'No') {
                $('#msg12no').removeClass('hidden');
                setTimeout(function () {
                    $('#agentBlock4').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg13').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg14').removeClass('hidden').after(typingEffect());
                            scrollToBottom();
                            setTimeout(function () {
                                $('.temp-typing').remove();
                                $('#msg15').removeClass('hidden').after(typingEffect());
                                scrollToBottom();
                                setTimeout(function () {
                                    $('.temp-typing').remove();
                                    $('#msg16').removeClass('hidden').after(typingEffect());
                                    scrollToBottom();
                                    setTimeout(function () {
                                        $('.temp-typing').remove();
                                        $('#msg17').removeClass('hidden');
                                        scrollToBottom();
                                    }, 0);
                                }, 2250);
                            }, 1250);
                        }, 1750);
                    }, 1250);
                }, 250);
            } else if (buttonValue == 'Yes') {
                $('#msg12yes').removeClass('hidden');
                $('#hdnApprovalStatus').val('no');
                $('#msg12medicare').removeClass('hidden');
                setTimeout(function () {
                    $('#agentBlock4').removeClass('hidden');
                    scrollToBottom();
                    setTimeout(function () {
                        $('.temp-typing').remove();
                        $('#msg18').removeClass('hidden').after(typingEffect());
                        scrollToBottom();
                        setTimeout(function () {
                            $('.temp-typing').remove();
                            $('#msg19').removeClass('hidden');
                            scrollToBottom();
                            setTimeout(function () {
                                $('#disconnected').removeClass('hidden');
                                scrollToBottom();
                            }, 1250);
                        }, 1250);
                    }, 1250);
                }, 1250);
                return false;
            }

            if ($('#hdnApprovalStatus').val() == 'no') {
                //downsell
                $('#DownsellNumber').removeClass('hidden');
                $('#DownsellNumber1').removeClass('hidden');
                $('#msg14disapproved').removeClass('hidden');
                $('#msg16disapproved').removeClass('hidden');
                $('#msg21disapproved').removeClass('hidden');
                $('#msg23disapproved').removeClass('hidden');
            } else {
                //standard aca
                $('#PrimaryNumber').removeClass('hidden');
                $('#PrimaryNumber1').removeClass('hidden');
                $('#msg14approved').removeClass('hidden');
                $('#msg16approved').removeClass('hidden');
                $('#msg21approved').removeClass('hidden');
                $('#msg23approved').removeClass('hidden');
            }
            scrollToBottom();
        }
    });

    function scrollToBottom() {
        const object = $('main');
        $('html, body').animate({
            scrollTop: object.offset().top + object.outerHeight() - $(window).height()
        }, 'fast');
    }
});

function typingEffect() {
    let string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
    string += '<div class="typing-animation">';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += '<div class="typing-dot"></div>';
    string += '</div>';
    string += '</div>';

    return string;
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentMonth = months[currentDate.getMonth()];
const currentDay = currentDate.getDate();

 <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2355712514627799');
  fbq('track', 'PageView');
  fbq('track', 'ViewContent');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2355712514627799&ev=PageView&noscript=1"/>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2355712514627799&ev=ViewContent&noscript=1"/>
</noscript>
const currentYear = currentDate.getFullYear();
const formattedDate = currentDayOfWeek + ', ' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '/' + ('0' + currentDay).slice(-2) + '/' + currentYear;
document.getElementById('currentDate').textContent = formattedDate;
