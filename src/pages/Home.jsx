export const Home = () => {
  return (
    <>
      <div className='row'>
        <div>
          <div className='content'>
            <span>
              <img src='/src/components/assets/location.png' alt='' />
              The Himalaya, India
            </span>
            <h1>
              The
              <br />
              Himalaya
            </h1>
            <p>
              You can get more details about The Himalaya by exploring our
              <br />
              official website.
            </p>
          </div>
        </div>
        <div>
          <div className='info'>
            <span className='active'>
              <img src='/src/components/assets/sun.png' alt='' />
              23° F
            </span>
            <span>
              <img src='/src/components/assets/location.png' alt='' />
              Distance: 215m
            </span>
            <span>
              <img src='/src/components/assets/duration.png' alt='' />
              Duration: 24 hours
            </span>
          </div>
        </div>
      </div>
      <div className='arrow'>
        <img src='/src/components/assets/back.png' alt='' />
        <img src='/src/components/assets/next.png' alt='' />
      </div>
    </>
  );
};
