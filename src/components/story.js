import * as React from "react";
import StoryText from "../../stories/index.mdx"
import { 
    title,
    body,
    image, 
    container 
} from "./story.module.css"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image";

const Story = () => {

    return (
        <>
            <header id="story" className="title">my story</header>
            <div className={container}>
                <div className={body}>
                    <StoryText />
                </div>
                <StaticImage 
                    alt="A photo of me will go here"
                    src="../images/columbiarivergorge.JPG"
                    className={image}
                />
            </div>
        </>
    )
}

export default Story