'use client'


function Colors() {

    
    return (
        <div>
            <form>
                <fieldset className='flex gap-2 pb-4 justify-end'>
                    <input type="radio" name="color" id="color" />
                    <input type="radio" name="color" id="color" />
                    <input type="radio" name="color" id="color" />
                    <input type="radio" name="color" id="color" />
                </fieldset>

            </form>
        </div>
    )
}

export default Colors;