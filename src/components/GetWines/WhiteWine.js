import { useState } from "react";
import { WineBag } from "./StyledComponents";

const wine = [
  {
    white_wine: {
      dry_white_wine: [
        "assyrtiko",
        "pinot_blanc",
        "cortese",
        "roussanne",
        "moschofilero",
        "muscadet",
        "viognier",
        "verdicchio",
        "greco",
        "marsanne",
        "white_burgundy",
        "chardonnay",
        "gruener_veltliner",
        "white_rioja",
        "frascati",
        "gavi",
        "l_acadie_blanc",
        "trebbiano",
        "sauvignon_blanc",
        "catarratto",
        "albarino",
        "arneis",
        "verdejo",
        "vermentino",
        "soave",
        "pinot_grigio",
        "dry_riesling",
        "torrontes",
      ],
      other: [
        "mueller_thurgau",
        "grechetto",
        "gewurztraminer",
        "chenin_blanc",
        "white_bordeaux",
        "semillon",
        "riesling",
        "sauternes",
        "sylvaner",
        "lillet_blanc",
      ],
    },
    red_wine: {
      dry_red_wine: [
        "petite_sirah",
        "zweigelt",
        "baco_noir",
        "bonarda",
        "cabernet_franc",
        "bairrada",
        "barbera_wine",
        "primitivo",
        "pinot_noir",
        "nebbiolo",
        "dolcetto",
        "tannat",
        "negroamaro",
        "red_burgundy",
        "corvina",
        "rioja",
        "cotes_du_rhone",
        "grenache",
        "malbec",
        "zinfandel",
        "sangiovese",
        "carignan",
        "carmenere",
        "cesanese",
        "cabernet_sauvignon",
        "aglianico",
        "tempranillo",
        "shiraz",
        "mourvedre",
        "merlot",
        "nero_d_avola",
      ],
      other: [
        "bordeaux",
        "marsala",
        "port",
        "gamay",
        "dornfelder",
        "concord_wine",
        "sparkling_red_wine",
        "pinotage",
        "agiorgitiko",
      ],
    },
    dessert_wine: [
      "pedro_ximenez",
      "moscato",
      "late_harvest",
      "ice_wine",
      "white_port",
      "lambrusco_dolce",
      "madeira",
      "banyuls",
      "vin_santo",
      "port",
    ],
    rose_wine: ["sparkling_rose"],
    sparkling_wine: [
      "cava",
      "cremant",
      "champagne",
      "prosecco",
      "spumante",
      "sparkling_rose",
    ],
    sherry: ["cream_sherry", "dry_sherry"],
    vermouth: ["dry_vermouth"],
    more: ["fruit_wine", "mead"],
  },
];

const WhiteWine = () => {
  const [message, setMessage] = useState("");
  const [wineInfo, setWineInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const getWineInformation = (wine) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const url = `https://api.spoonacular.com/food/wine/dishes?apiKey=${process.env.REACT_APP_API_KEY}&wine=${wine}`;

    const doNetworkCall = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();

        if (jsonData.status === "failure") {
          setMessage(jsonData.message);
          setWineInfo({
            text: "",
            pairings: []
          })
        } else {
          setShowInfo((prevValue) => !prevValue);
          setMessage("");
          setWineInfo(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    doNetworkCall();
  };

  const handleWineType = (event) => {
    getWineInformation(event.target.value);
  };

  return (
    <>
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <WineBag>
            <label htmlFor="wines">Info Of Dry White Wine:</label>
            <br />
            <select name="wines" id="wines" onChange={handleWineType}>
              {wine[0].white_wine.dry_white_wine.map((eachValue) => (
                <option value={eachValue} key={eachValue}>
                  {eachValue}
                </option>
              ))}
            </select>
            <div>
              {showInfo && (
                <>
                  <h4>Description: </h4>
                  <p style={{ maxWidth: "400px", textAlign: "justify" }}>
                    {wineInfo.text}
                  </p>
                  <ul>
                    {wineInfo.pairings.map((data) => 
                        <li key={data}>{data}</li>
                    )}
                  </ul>
                </>
              )}

              <p style={{ color: "red" }}>{message}</p>
            </div>
          </WineBag>
        </div>
      </form>
    </>
  );
};

export default WhiteWine;
