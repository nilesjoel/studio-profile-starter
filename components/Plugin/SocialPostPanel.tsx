import styled from "styled-components"
import { Typography } from "../Shared/Typography"
import InstagramPost from "../Image/InstagramPost"
import { StyledButton } from "../Form/form.elements"



const StyledPost = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    justify-content: space-between;
    align-items:flex-start;
`

export const SocialPostPanel = ({ post, key, handleClick }) => {


    return (
        <StyledPost key={key}>
            <Typography menu>{post.name}</Typography>
            {/* {JSON.stringify(post, null, 2)} */}
            <InstagramPost src={post.cover.large.url}
                height={200} width={200}
                // height={post.media.large.height} 
                // width={post.media.large.width} 
                alt={post.name}></InstagramPost>
            <Typography small>{post.caption}</Typography>
            {/* <StyledButton onClick={() => handleClick(post.cover.format.large.url)}>Post</StyledButton> */}
        </StyledPost>
    )
}