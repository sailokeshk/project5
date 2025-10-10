
//No default exprot so we need to use Apple with {} braces in import statement
//These are Named imports
//JSX Attributes for & htmlFor , class & className(Reserved key words) etc
//Writing html kind of tags in Js is nothing but JSX
//JSX Expressions - use {} braces To evaluate Expression  - {3*9} or sum(98,67.5) - in between them we can write all JS code

export function Apple(){
    let x=100;
    return(
        <div>

            <h1 className="hello">Hello World</h1>
            <label htmlFor='chkbox'> Subscribe: </label>
            <input type="checkbox" id='chkbox' />
            <br />
            {sum(98,67.7)}
            <br/>
            {7*7}<br/>
            {x}
        </div>
    )
}

function sum(a,b){
    return(a+b);
}