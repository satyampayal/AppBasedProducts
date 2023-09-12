import React, { useState } from 'react'
function Quiz() {

    const [i, setI] = useState(0);
    const [correct, setCorrect] = useState(0);
 
  
    const Quizes = [
        {
            "question": " Formula of methane?",
            "a": "Ch4",
            "b": "ch2",
            "c": "ch3",
            "d": "not",
            "correct": "a"
        },
        {
            "question": " What is name of make this website?",
            "a": "Satyam",
            "b": "Durgesh",
            "c": "Shivam",
            "d": "Adhura",
            "correct": "a"
        },
        {
            "question": " R.D college is good in activity ?",
            "a": "Never",
            "b": "Kharab",
            "c": "Good",
            "d": "Bad",
            "correct": "a"
        },
        {
            "question": " which person not visit my linked profile ?",
            "a": "Sunny kr.",
            "b": "shaurya",
            "c": "vishal",
            "d": "all",
            "correct": "d"
        }

    ]
    const CheckCorrect = (i, op) => {
      
        if (Quizes[i].correct === op) {
            setCorrect(() => correct + 1);
        }
    }
    const submitHandlerPage = () => {
        setI(() => Quizes.length)
        //  console.log('Correct ans is ', correct);

    }

    return (
        <div className='w-[40%] h-[30%] pt-[30px] border-[1px] border-black rounded-[5px] px-4  '>
            {i === (Quizes.length)
                ?
                <div className='bg-green-500  px-[50px] py-[50px] rounded-[10px] text-center text-white text-[20px] '>Your score is {correct}</div>

                : <>
                    <div className=''>
                        <h2>Q.{i + 1} {Quizes[i].question}</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            <h3 className=' cursor-pointer' onClick={() => CheckCorrect(i, 'a')}  > <span className=' inline-block bg-gray-200 rounded-[5px]  p-[5px]  mr-[3px] '>1.</span> {Quizes[i].a}</h3>
                            <h3 className=' cursor-pointer' onClick={() => CheckCorrect(i, 'b')}> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>2.</span>{Quizes[i].b}</h3>
                            <h3 className=' cursor-pointer' onClick={() => CheckCorrect(i, 'c')}> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>3.</span>{Quizes[i].c}</h3>
                            <h3 className=' cursor-pointer' onClick={() => CheckCorrect(i, 'd')}> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>4.</span>{Quizes[i].d}</h3>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[10px]'>
                        <div className='bg-red-300 px-[16px] py-[6px] rounded-[5px] cursor-pointer'>Reset</div>
                        <div onClick={() => setI(() => i + 1)}
                            className='bg-blue-500  px-[16px] py-[6px] rounded-[5px] cursor-pointer'>
                            save and Next
                        </div>
                        <div onClick={() => submitHandlerPage()} className='bg-green-300  px-[16px] py-[6px] rounded-[5px] cursor-pointer'>submit</div>
                    </div>
                </>


            }

        </div>
    )
}

export default Quiz