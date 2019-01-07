import "./index.scss";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const settings = {
  twitter_stream: el => {
    ReactDOM.render(
      <div className="dv-twitter-embed">
        <TwitterTimelineEmbed
          sourceType="url"
          url="https://twitter.com/NewAmericaEd/lists/negreg-livetweeting"
          noHeader
          options={{ height: 600 }}
        />
      </div>,
      el
    );
  }
};

window.renderDataViz = function(el) {
  let id = el.getAttribute("id");
  let chart = settings[id];
  chart(el);
};
