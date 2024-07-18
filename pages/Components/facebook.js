import Script from 'next/script';

function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
        onLoad={() => {
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "206743429190092"); // Thay YOUR_PAGE_ID bằng ID trang của bạn
          chatbox.setAttribute("attribution", "biz_inbox");

          window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v12.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        }}
      />
    </div>
  );
}

export default Facebook;