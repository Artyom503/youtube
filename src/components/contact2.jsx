



export const Contact = (props) => {
  
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Контактная информация</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Адрес
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Телефон
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2023 Comme il faut
            
          </p>
        </div>
      </div>
    </div>
  )
}
