import React from 'react'

const ConfirmPurchaseModal = () => {
  return (
    <>
        <div className="modal fade" id="confirmPurchase" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className=''>Su orden a sido generada con exito</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ConfirmPurchaseModal