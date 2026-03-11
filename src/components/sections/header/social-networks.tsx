import YoutubeIcon from '@assets/youtube.svg?react'
import VkIcon from '@assets/vk.svg?react'
import FacebookIcon from '@assets/facebook.svg?react'
import TwitterIcon from '@assets/vk.svg?react'
import TwitchIcon from '@assets/twitch.svg?react'
import InstagramIcon from '@assets/instagram.svg?react'


function SocialNetworks() {
    return(
        <ul className='flex items-center gap-x-5 md:gap-x-7 lg:gap-x-10'>
            <li>
                <YoutubeIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
            <li>
                <VkIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
            <li>
                <FacebookIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
            <li>
                <TwitterIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
            <li>
                <TwitchIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
            <li>
                <InstagramIcon className='cursor-pointer hover:opacity-[0.8]'/>
            </li>
        </ul>
    )
}

export default SocialNetworks;