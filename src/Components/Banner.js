import React, { useEffect, useState } from 'react';
import './Banner.css';
import foot from './DigitalFootprint.png';
import { dataRef } from './FireBase';

export const Legimage = (props) => {
  const [initialData, setInitialData] = useState([]);
  const [sensorValues, setSensorValues] = useState([]);
  const [changedIndex, setChangedIndex] = useState(null);
  let [sen1,setSen1]= useState(false)
  let [sen2,setSen2]= useState(false)
  let [sen3,setSen3]= useState(false)
  let [sen4,setSen4]= useState(false)
  let [sen5,setSen5]= useState(false)
  
  useEffect(() => {
    const getDataFromDb = () => {
      try {
        dataRef.ref().child('test').on('value', (data) => {
          const newData = Object.values(data.val());
          console.log(newData, "New Data..");

          // Set initial data when it is not set yet
          if (initialData.length === 0) {
            setInitialData(newData);
          } else {
            console.log(initialData, "not empty");
          }

          console.log(initialData);

          // Check for changes in the whole array
          if (!arraysEqual(newData, sensorValues)) {
            setSensorValues(newData);

            // Find the index where the change occurred
            const changedIndex = findChangedIndex(newData, sensorValues);
            setChangedIndex(changedIndex);

            console.log("change detected at index:", changedIndex);
            if(changedIndex==2){
              setSen1(true)
              setInterval(() => {
                setSen1(false)
              }, 5000);
              console.log(sen1)
            }
            if(changedIndex==3){
              setSen2(true)
              setInterval(() => {
                setSen2(false)
              }, 5000);
            }
            if(changedIndex==4){
              setSen3(true)
              setInterval(() => {
                setSen3(false)
              }, 5000);
            }
            if(changedIndex==5){
              setSen4(true)
              setInterval(() => {
                setSen4(false)
              }, 5000);
            }
            if(changedIndex==6){
              setSen5(true)
              setInterval(() => {
                setSen5(false)
              }, 5000);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    const findChangedIndex = (arr1, arr2) => {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return i;
        }
      }
      return null; // No change found
    };

    // Call getDataFromDb immediately when the component mounts
    getDataFromDb();

    // Set up an interval to call getDataFromDb every second
    const intervalId = setInterval(() => {
      getDataFromDb();
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [initialData, sensorValues]);

  const arraysEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  const setValueFn = () => {
    try {
      dataRef.ref().child('test').on('value', (data) => {
        const SenData = Object.values(data.val());
        console.log(SenData, "New Data..from below");
        setInitialData(SenData);
        setSensorValues(SenData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='app'>
      <h1>Foot Pressure Meter</h1>
      <div className='main'>
        <div className='back'>
          <img src={foot} alt='foot' />
        </div>
        <div className='Hover'>
        <div className='Hover'>
        <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items '></div>
                <div className='items'></div>
                <div className='items '></div>
                <div className='items '></div>
                <div className='items '></div>
                <div className='items'></div>
                <div className='items'></div>
                  {
                    sen1 ?   <div className='items  colorchangeingclass'>11</div> 
                    : <div className='items'>11</div> 
                  }
             
                <div className='items '></div>
                <div className='items'></div>
                <div className='items '></div>
                <div className='items '></div>
                <div className='items'></div>
                
                {
                    sen2 ?   <div className='items  colorchangeingclass '>11</div> 
                    : <div className='items'>11</div> 
                  }
                <div className='items'></div>
                {
                    sen3 ?   <div className='items  colorchangeingclass '>11</div> 
                    : <div className='items'>11</div> 
                  }
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items '></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                {
                    sen4 ?   <div className='items  colorchangeingclass '>11</div> 
                    : <div className='items'>11</div> 
                  }
                <div className='items '></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
              
                {
                    sen5 ?   <div className='items  colorchangeingclass '>11</div> 
                    : <div className='items'>11</div> 
                  }
              

                <div className='items '></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items '></div>
                <div className='items '></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
                <div className='items'></div>
</div>
        </div>
      </div>
    </div>
  );
};
