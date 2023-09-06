import * as React from "react";
import StoryText from "../../stories/index.mdx"
import { 
    body,
    image, 
    container,
    imageOverlay
} from "./story.module.css"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image";

const Story = () => {

    return (
        <div>
                <header className="title">my story</header>
                <div className={container}>
                    <div id="story" className="anchor"></div>
                    <div className={body}>
                        <StoryText />
                    </div>
                    <StaticImage 
                        alt="Jess sitting on a ledge in front of the Columbia River Gorge"
                        src="../images/columbiarivergorge.JPG"
                        className={image}
                    />
            </div>
        </div>
    )
}

export default Story