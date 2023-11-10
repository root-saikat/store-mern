import React from 'react'

const brandsForm = ({ handleSubmit, value, setValue, buttonTitle }) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Type New Brands Name' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary"> {buttonTitle} </button>
          </div>
        </form>
      </div>
    )
}

export default brandsForm
