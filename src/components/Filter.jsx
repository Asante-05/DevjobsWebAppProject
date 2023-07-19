import classNames from 'classnames';
import iconLocation from '/assets/desktop/icon-location.svg'
export default function Filter () {

    return(
        <>
        <div className={classNames("flex flex-col bg-pattern-detail-footer h-auto p-6  w-4/5 rounded-md")}>
            <div className='flex mb-5 '>
                <img src={iconLocation} alt='Filter' className='w-5 mr-5'></img>
                <input type="text" placeholder="Filter by time only..." className='text-xl focus:outline-0'></input>
            </div>
            <hr className='w-72 rounded dark:bg-gray-700'></hr>
            <div className='mt-5'>
                <input type="checkbox" className='h-4 w-4'></input>
                <label className='font-bold text-xl'> Full time only</label>
            </div>
            <button className="bg-violet w-64 h-12 text-white font-semibold rounded-sm mt-5">Search</button>

        </div>
        </>
    );
}