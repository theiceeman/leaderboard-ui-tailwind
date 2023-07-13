
import bgimg from './assets/img/bg-img.svg'
import bgDark from './assets/img/bg-dark.svg'
import backIcon from './assets/img/back-icon.svg'
import logo from "./assets/img/logo-icon.svg"
import copyIcon from "./assets/img/copy-icon.svg"
import searchIcon from "./assets/img/search-icon.svg"


import position1 from "./assets/img/position-1.svg"
import position2 from "./assets/img/position-2.svg"
import position3 from "./assets/img/position-3.svg"

import bannerImg from './assets/img/banner-1.svg'
import topScore from './assets/img/top-score.svg'

import './App.css'
// import "./assets/fonts.css"
import { Tab } from '@headlessui/react'

import { campaigns, rankings } from './data'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  function shortenAddress(address: string) {
    const prefix = address.substring(0, 6);
    const suffix = address.substring(address.length - 4);
    return `${prefix}...${suffix}`;
  }

  function positions(position: string) {
    switch (position) {
      case '1':
        return <img src={position1} alt="" />
        break;
      case '2':
        return <img src={position2} alt="" />
        break;
      case '3':
        return <img src={position3} alt="" />
        break;

      default:
        return position
        break;
    }
  }

  return (

    <div style={{ backgroundImage: `url(${bgimg})` }} className=" w-full bg-brand-dark bg-cover">
      <div className="inline-flex items-end w-full justify-end gap-1 mt-10 pr-20 cursor-pointer">
        <img src={backIcon} alt="" />
        <p className='text-white font-bold text-base font-grotesk'>
          Back to main website
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <img src={logo} alt="logo" />
        <span className='text-white text-base font-normal font-cartoon my-auto'>
          MAD <br />WALLET
        </span>
      </div>
      <div className="text-center text-white text-4xl md:text-4xl font-grotesk mt-7">
        <h1>MadWallet Reward Campaigns</h1>
      </div>

      <div className="flex mt-11 pb-20">
        <div style={{ backgroundImage: `url(${bannerImg})` }} className='w-[259px] h-[133px] bg-no-repeat md:w-[612px] md:h-[314px] bg-cover mx-auto'>

        </div>
      </div>
      <div style={{ backgroundImage: `url(${bgDark})` }} className=" w-full pt-36 bg-cover">
        <div className="text-brand-light font-grotesk text-center">
          <h2 className=' text-6xl font-bold '>MadRanks</h2>
          <p className='text-brand-lighter text-2xl pt-10 font-light'>
            Total Participants
            <span className='px-4 py-1 bg-brand-darker rounded ml-3'>34,3553</span></p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 pt-20  justify-end">
          <div className="flex flex-col font-grotesk justify-center items-center text-center">
            <p className='text-brand-light text-3xl'>Top score</p>
            <img src={topScore} alt="" width="197px" height="197px" />
            <p className='text-brand-light text-2xl'>Overall Rank 1#</p>
            <p className='text-brand-lighter text-2xl rou'>244,245 pt</p>
          </div>
          <div className="w-full lg:w-[983px] lg:h-[900px] bg-white rounded-lg mr-32">
            <div className="flex flex-col">
              <div className="px-12 pt-8 ">
                <div className="flex flex-col items-center lg:flex-row flex-wrap w-full gap-5 justify-between">

                  <h2 className='text-3xl font-grotesk font-bold text-brand-dark'>Leaderboard</h2>
                  <div className="relative">
                    <img className='absolute my-3 mx-3' src={searchIcon} alt="" />
                    <input className='w-[255px] h-[41px] rounded-3xl font-grotesk border-2 border-solid border-brand-lighter text-xs focus:outline-none px-8' type="text" placeholder='Search by wallet address' />
                  </div>

                </div>

                <div className="mt-4">
                  <h3 className='text-brand-light font-grotesk text-base font-bold'>Updated every 24hrs</h3>
                  <p className='text-gray-400 font-grotesk'> Last update 2/3/2023 23:20</p>
                </div>
              </div>
              <div className="w-full px-2 pt-9 sm:px-0">

                <Tab.Group>
                  <Tab.List className="flex gap-5 justify-center overflow-scroll">

                    {campaigns.map((e) => (
                      <Tab
                        className={
                          ({ selected }) =>
                            classNames(' font-grotesk  text-lg rounded-3xl px-8 py-2 cursor-pointer text-center focus:outline-none', selected ? 'bg-brand-dark text-brand-light' : ' border-2 border-solid text-brand-dark')
                        }
                      >
                        {e}
                      </Tab>
                    ))}


                    {/* <Tab className={
                      ({ selected }) =>
                      classNames(' font-grotesk  text-lg rounded-3xl px-8 py-2 cursor-pointer text-center', selected ? 'bg-brand-dark text-brand-light' : ' border-2 border-solid text-brand-dark')
                    }>
                      Overall
                    </Tab> */}

                  </Tab.List>
                  <div className="flex flex-col mt-4">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full text-lg font-grotesk text-center font-light text-brand-dark">
                            <thead className="border-b font-medium dark:border-neutral-200 bg-brand-lighter">
                              <tr>
                                <th scope="col" className="px-6 py-7">Position</th>
                                <th scope="col" className="px-6 py-7">Wallet Address</th>
                                <th scope="col" className="px-6 py-7">Tx. Volume</th>
                                <th scope="col" className="px-6 py-7">No. of Trx</th>
                                <th scope="col" className="px-6 py-7">Score (pt)</th>
                              </tr>
                            </thead>
                          </table>
                          <Tab.Panels as="span">
                            <Tab.Panel as="table" className='min-w-full text-lg font-grotesk text-center font-light text-brand-dark'>
                              <tbody>
                                {
                                  rankings.map(e => (
                                    <tr className="border-b dark:border-neutral-200">
                                      <td className=" px-6 py-4 text-center w-[200px] px-au">
                                        {positions(e.position)}
                                      </td>
                                      <td className="w-3 px-6 py-4 text-center">
                                        <div className="flex gap-4">
                                          {shortenAddress(e.address)}
                                          <img src={copyIcon} alt="" />
                                        </div>
                                      </td>
                                      <td className=" px-6 py-4 text-center">{e.tx_vol}
                                      </td>
                                      <td className=" px-6 py-4 text-center">{e.no_of_trx}</td>
                                      <td className=" px-6 py-4 text-center">{e.points}</td>
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </Tab.Panel>

                            <Tab.Panel as="table" className='min-w-full text-lg font-grotesk text-center font-light text-brand-dark'>
                              <tbody>
                                <tr className="border-b dark:border-neutral-200">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                  <td className="whitespace-nowrap px-6 py-4">Jane</td>
                                  <td className="whitespace-nowrap px-6 py-4">California</td>
                                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-200">
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                  <td className="whitespace-nowrap px-6 py-4">Sylvia</td>
                                  <td className="whitespace-nowrap px-6 py-4">Florida</td>
                                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                              </tbody>
                            </Tab.Panel>
                          </Tab.Panels>

                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Group>
              </div>
            </div>

          </div>

        </div>

      </div>



    </div>

  )
}

export default App
