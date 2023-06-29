import React from 'react';

function Form(props) {
    return (
        <div>
            <form >
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input name="name" onChange={props.showname} type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Price</label>
                    <input name="price" onChange={props.showname}  type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Image</label>
                    <input name="image"  onChange={props.showname} type="text" class="form-control" id="formGroupExampleInput2" placeholder="URL" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">description</label>
                    <input name="description" onChange={props.showname} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Description" />
                </div>
                <button onClick={props.handleClick} type="submit" class="btn btn-outline-success">Add item</button>
            </form>
        </div>
    )
}

export default Form;