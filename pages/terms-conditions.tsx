import Link from 'next/link'
import React from 'react'

type Props = {}

const TermsConditions = (props: Props) => {
   const rules = [
        "Stay is minimum of 3 days.",
        "Guest agrees that all rental fees and caution deposit must be paid in advance and receipt issued before check-in.",
        "We ask that you, your children, and your quests respectfully treat the apartment, its contents, and its furnishing. We know that accidents happen and request to be informed of accidents as they happen rather than having to find out about broken or lost items at the final inspection on the departure day. In case of breakages or loss, we reserve the right to charge for the total replacement value of the items); However, if the property is left in good condition, the said caution deposit will be refunded after exit.",
        "The apartment must be inspected by the authorized staff of IDABO HOMES and confirmed in good condition to quality the guest for a refund of the caution deposit.",
        "Guest is advised to ensure that no personal effects are left behind during check out to avoid being disposed of, as IDABO HOMES will not be responsible for disposing of items after the guest vacates the apartment",
        "IDABO HOMES shall not be responsible for any personal belongings brought in by the guest. Thus, the guests are advised to guard their valuables diligently by depositing them in the security safe during their stay.",
        "Parents are liable for their children and shall not leave them unsupervised, as IDABO HOMES shall not be held responsible for injuries suffered by the child during your stay in the apartment.",
        "No pets are allowed in the apartment, and No loitering in the hallway.",
        "Hard drugs and illegal substances are not allowed in the apartment and environs.",
        "Checkout must be done on or before 12 noon of the checkout date. Guests who overstay on the property shall be charged a penalty fee of a full day payment for late check-out or forced eviction.",
        "Suppose you extend your stay beyond the initial checkout date. In that case, We ask that you confirm availability from IDABO HOMES at least a week before the original checkout date to avoid conflict.",
        "The maximum number of occupants allowed in the apartment is six people.",
        "Under exceptional circumstances and with the guest's approval, it may be necessary for the owners to enter the apartment.",
        "Guests are to keep their keys safe and not pass them on to unauthorized persons. Should the keys become lost or missing, IDABO HOMES reserves the right to charge for replacements.",
        "Guest agrees not to dispose of food waste, dangerous liquids, fats, or feminine hygiene items in the WC, sinks, or shower tray to avoid blockage. Guests are not to litter the apartment but safely/neatly dispose of all garbage into the dustbins provided.",
        "The guest undertakes not to sublet the apartment or use the same for illegal activities. IDABO HOMES reserves the right to terminate a booking at any time on the grounds of breach of any of the above-stated rules, mistreatment of property, or criminal activity on the part of those occupying the apartment.",
        "No skit video or commercial video shooting in the apartment without permission from IDABO HOMES.",
        "Drinks in the apartment are for sale except for the complimentary wine and water in the refrigerator.",
        "Apartment cleaning can be done between 8 am to 12 pm. Kindly note that cleaning the apartment may take up to 2-3 hrs."
    ]
    
  return (
    <div>
        <div className="min-w-screen bg-cover  h-full bg-[url('../assets/Background.svg')]">
            <div className='w-full md:pt-16 pb-[1rem] lg:pb-[10rem]'>
                    <h1 className='text-base md:text-[2.5rem] text-center text-[#DFAA5B] CircularStd font-bold leading-10 '>Welcome to Idabo Homes</h1>
                    <h2 className='text-base md:text-[4.3125rem] text-center text-[#DFAA5B] CircularStd font-semibold capitalize pt-1 md:leading-[3.6rem] md:pt-8 lg:mt-8'>terms and conditions</h2>
                    <div className='flex justify-center mt-10 lg:mt-40'>
                        <div>
                            <ul>
                            {rules.map((item) => (<li key={item} className='w-[15rem] md:w-[35rem] lg:w-[45rem] list-decimal text-[#000000] mb-4 CircularStd font-medium text-base'>{item}</li>))}
                            </ul>
                        </div>
                    </div>
            </div>
            <div className='pb-14 lg:pb-56 mt-8 lg:mt-52'>
        <h1 className='text-center text-[#957554] text-[1rem] md:text-[2rem] lg:text-[2rem] CircularStd font-semibold'>Let Us welcome you Home!</h1>
        <div className='flex justify-center mt-4 md:mt-8'>
          <Link href='/book'>
            <button className='w-[8.5rem] h-6 CircularStd md:w-[20rem] md:h-[4.75rem] lg:w-[26.125rem] lg:h-[4.75rem] rounded-[0.313rem] md:rounded-[0.625rem] text-white text-[0.375rem] md:text-xl lg:text-2xl font-Lexend font-semibold bg-[#DFAA5B]'>
              Book a stay Now
            </button>
          </Link>
        </div>
      </div>
        </div>
    </div>
  )
}

export default TermsConditions