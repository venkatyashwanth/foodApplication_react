import {Wine} from './WineResource'
import {WineBag} from './StyledComponents'

const OtherWhiteWine = () => {
    return (
        <>
        <form>
            <div style={{ display: "flex" }}>
              
              <WineBag>
                <label htmlFor="wines2">Info On Other White Wine:</label>
                <br />
                <select name="wines" id="wines2">
                  {Wine[0].white_wine.other.map((eachValue) => (
                    <option value={eachValue} key={eachValue}>
                      {eachValue}
                    </option>
                  ))}
                </select>
              </WineBag>
            </div>
          </form>
        </>
    )
}

export default OtherWhiteWine