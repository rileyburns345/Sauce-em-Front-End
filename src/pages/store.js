import React from 'react'
import Menu from '../components/menu'
import Gallary from'../components/gallary'




const Store = () => {
  return (
    <div>
      <Menu />

        <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Roza's Red Pesto x 2 <br/>
                Total: $19.98
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn cartButton">Checkout</button>
              </div>
            </div>
          </div>
        </div>

      <Gallary />
    </div>
  )
}

export default Store
