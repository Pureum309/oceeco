import {useRouter} from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css';

import { GetAnswer, GetName } from "../../data/que_content";

export default function Qresults(){

    const an = GetAnswer();
    const nm = GetName();

    return <div>
        <h3>Hi {nm}</h3>
    <div>
        I see that you are doing {an[0]} and feeling {an[1]}.
        That's why you are planning to {an[2]}.
    </div>

    {
        an[0] === "Bad" && 
        <img src="https://cdn.shopify.com/s/files/1/0079/3287/0756/t/6/assets/pf-90eec9f1--saddogspotthesignsandcheerthemup_500x.jpg?v=1620752484" />
    }
    {
        an[0] === "Good" && 
        <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/12/30151747/Pembroke-Welsh-Corgi-smiling-and-happy-outdoors.jpeg
        " />
    }
    {
        an[0] === "Great" && 
        <img src="https://www.pinkvilla.com/imageresize/happydog.jpg?width=752&format=webp&t=pvorg
        " />
    }
    </div>
}