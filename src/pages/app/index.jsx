import './index.scss'

export default function App() {


    return (
        <div className='pagina-app'>
            <section className='secao-1'>
                <div className='card'>
                    <img src="/assets/images/valorant.jpg" alt="" />

                    <div className='texto'>
                        <div className='titulo'>
                            <img src="/assets/images/valorant.icon.jpg" alt="" />
                            <h1>VALORANT</h1>
                        </div>
 
                        <div className='textinho'>
                        <p>The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!</p>

                        <h2>318 261 On-line ° 1 198 693 Members</h2>
                        </div>
                       
                    </div>
                </div>

                <div className='card'>
                    <img src="/assets/images/roblox.jpg" alt="" />

                    <div className='texto'>
                    <div className='titulo'>
                        <img src="/assets/images/roblox icon.jpg" alt="" />
                        <h1>Roblox</h1>
                    </div>

                    <div className='textinho'>
                    <p>The largest community-run Roblox server. Join for news, chat, LFG, events & more! For both Users and Creators. ✨</p>
                    <h2>220 617 On-line ° 1 179 095 Members</h2>

                    </div>
                    
                </div>
                    </div>
                   
            </section>

            <section className='secao-2'>

                <div className='card-2'>
                    <h1>Have a server you want to add to Discovery?
                    </h1>

                    <button>Make Your Community Public</button>
                </div>

                <div  className='card-3'>
                    <div className='texto'>
                        <h1>Find a place where you belong</h1>

                        <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

                        
                        <button>Join Discord</button>
                        
                    </div>

                    <img src="/assets/images/banner.svg" alt="" />
                </div>
            </section>
        </div>
    )
}