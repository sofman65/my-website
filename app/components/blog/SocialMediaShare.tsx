// components/blog/SocialMediaShare.tsx
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from 'react-share';

const SocialMediaShare = ({ url }: { url: string }) => {
    return (
        <div className="flex justify-end gap-8">
            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton url={url}>
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </div>
    );
};

export default SocialMediaShare;
