import { NetflixRegister } from '../neflix-register/netflix-register';
import './netflix-main.css';

export function NetflixMain()
{
    return(
        <main>
            <div className="main-title">The biggest Indian hits. Ready to watch here from ₹ 149.</div>
            <div className="main-subtitle">Join today. Cancel anytime.</div>
            <NetflixRegister />
        </main>
    )
}