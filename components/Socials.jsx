import Link from 'next/link'


import {
    RiFacebookFill,
    RiYoutubeFill,
    RiTwitterFill,
    RiInstagramFill,
    RiTiktokFill
} from 'react-icons/ri'

const socials = [
    {
        id: 1,  
        icon: <RiFacebookFill />,
        path: '#'
    },
    {
        id: 2,
        icon: <RiYoutubeFill />,
        path: '#'
    },
    {
        id: 3,
        icon: <RiTwitterFill />,
        path: '#'
    },
    {
        id: 4,
        icon: <RiInstagramFill />,
        path: '#'
    },
    {
        id: 5,
        icon: <RiTiktokFill />,
        path: '#'
    }
];

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        
        {socials.map((social,index)=>{
            return (
                <Link href={social.path} key={index}  className={`${iconStyles}`}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials