import { Share2 } from 'lucide-react'
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

export function SocialShare() {
  const url = window.location.href
  return (
    <div className="flex gap-2 items-center">
      <Share2 />
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <ViberShareButton url={url}>
        <ViberIcon size={32} round={true} />
      </ViberShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <PinterestShareButton url={url} media={url}>
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
    </div>
  )
}
