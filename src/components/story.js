import * as React from "react";
import StoryText from "../../stories/index.mdx"
import { title } from "./story.module.css"

const Story = () => {

    return (
        <div>
            <header className={title}>my story</header>
            <StoryText />
        </div>
    )
}

export default Story