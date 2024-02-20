export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                 <img src='img/metallica.jpeg' alt='ggg' style={{width: 200, height: 200, borderRadius: 400/ 2}}></img>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://www.youtube.com/channel/UCbulh9WdLtEXiooRcYK7SWw'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Перейти
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
