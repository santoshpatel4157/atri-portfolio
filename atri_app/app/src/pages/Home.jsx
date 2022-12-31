import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usenavbarCb, useDiv1Cb, useDiv2Cb, useFlex2Cb, usestartCb, usetextCb, useFlex4Cb, useFlex5Cb, useimageCb, usetrustedsectionCb, useDiv5Cb, useDiv6Cb, useFlex7Cb, useservicesectionCb, useDiv7Cb, useDiv8Cb, useFlex9Cb, useDiv9Cb, useFlex10Cb, useDiv12Cb, useDiv13Cb, useDiv10Cb, useFlex11Cb, useDiv14Cb, useDiv15Cb, useDiv11Cb, useFlex12Cb, useDiv16Cb, useDiv17Cb, useprojectsectionCb, useFlex14Cb, useDiv18Cb, useDiv19Cb, useDiv21Cb, useFlex15Cb, useDiv22Cb, useDiv25Cb, useFlex16Cb, useDiv27Cb, useFlex17Cb, useDiv26Cb, useDiv29Cb, useDiv28Cb, useFlex18Cb, usebolgsectionCb, useFlex19Cb, useDiv31Cb, useFlex20Cb, useDiv32Cb, useFlex21Cb, usebox1Cb, usedateCb, usereadCb, useFlex30Cb, useFlex28Cb, useFlex29Cb, useFlex33Cb, useFlex31Cb, useFlex32Cb, useFlex36Cb, useFlex34Cb, useFlex35Cb, useFlex27Cb, useFlex25Cb, useFlex26Cb, useproductsectionCb, useFlex39Cb, useDiv34Cb, useDiv35Cb, useimagesCb, useFlex40Cb, useFlex41Cb, useworksectionCb, useDiv37Cb, usestandfordboxCb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex51Cb, useFlex49Cb, useFlex50Cb, useFlex48Cb, useFlex55Cb, useFlex53Cb, useFlex54Cb, useFlex52Cb, useDiv40Cb, useFlex65Cb, useFlex59Cb, useFlex56Cb, useFlex60Cb, useFlex66Cb, useFlex61Cb, useFlex57Cb, useFlex62Cb, useFlex67Cb, useFlex63Cb, useFlex64Cb, useFlex58Cb, usetestimonialsectionCb, useDiv41Cb, useDiv42Cb, useFlex69Cb, useDiv43Cb, useDiv44Cb, useFlex70Cb, useDiv45Cb, usefooterCb, useFlex71Cb, useFlex72Cb, useFlex73Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, uselogoCb, useaboutCb, useserviceCb, useprojectCb, useBlogCb, usebookacallCb, usearrowCb, usesubtextCb, usetext2Cb, usetext1Cb, usedownloadCb, usebookacallbuttonCb, useImage37Cb, usepersonimgCb, useTrusted_byCb, uselogoispum1Cb, uselogoispum2Cb, uselogoispum3Cb, uselogoispum4Cb, useSERVICESCb, useservicesubtextCb, usebox1titlteCb, usebox1subtextCb, useserviceimg1Cb, useDesignCb, useFrontCb, useWebCb, usebox2subtextCb, usebox2titlteCb, useWebflowCb, useFigmaCb, use_SketchCb, useserviceimg2Cb, usebox3subtextCb, usebox3titlteCb, usedeviceCb, useEfficientCb, usecleanCb, useserviceimg3Cb, usePROJECTSCb, useIbringresultsCb, useMyclientsareproofCb, useViewCb, useBRANDINGCb, useSoulfulRebrandCb, useImage14Cb, useTextBox36Cb, useTextBox38Cb, useTextBox39Cb, useTextBox37Cb, useImage15Cb, useTextBox41Cb, useTextBox42Cb, useImage16Cb, useTextBox40Cb, useBLOGSCb, useLatestCb, useviewallCb, useImage17Cb, useTextBox50Cb, useTextBox48Cb, useTextBox49Cb, useTextBox51Cb, useImage18Cb, useTextBox59Cb, useImage20Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useTextBox63Cb, useImage21Cb, useTextBox60Cb, useTextBox61Cb, useTextBox62Cb, useTextBox67Cb, useImage22Cb, useTextBox64Cb, useTextBox65Cb, useTextBox66Cb, useTextBox55Cb, useImage19Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, usePRODUCT_DESIGNERCb, useThatmeCb, useTextBox70Cb, useImage23Cb, useImage24Cb, useImage25Cb, useImage26Cb, useEducationCb, useTextBox75Cb, useTextBox76Cb, useStanfordCb, useImage27Cb, useImage28Cb, useTextBox79Cb, useTextBox77Cb, useTextBox78Cb, useImage29Cb, useTextBox82Cb, useTextBox80Cb, useTextBox81Cb, useTextBox92Cb, useTextBox83Cb, useTextBox84Cb, useTextBox89Cb, useImage30Cb, useTextBox85Cb, useTextBox86Cb, useTextBox90Cb, useImage31Cb, useImage32Cb, useTextBox91Cb, useTextBox87Cb, useTextBox88Cb, useTextBox93Cb, useTESTIMONIALSCb, useImage33Cb, useImage34Cb, useTextBox95Cb, useImage35Cb, useTextBox97Cb, useTextBox98Cb, useReadyCb, usecallCb, useImage38Cb, useImage39Cb, useImage40Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useImage36Cb, useTextBox111Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const navbarProps = useStore((state)=>state["Home"]["navbar"]);
const navbarIoProps = useIoStore((state)=>state["Home"]["navbar"]);
const navbarCb = usenavbarCb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const startProps = useStore((state)=>state["Home"]["start"]);
const startIoProps = useIoStore((state)=>state["Home"]["start"]);
const startCb = usestartCb()
const textProps = useStore((state)=>state["Home"]["text"]);
const textIoProps = useIoStore((state)=>state["Home"]["text"]);
const textCb = usetextCb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const imageProps = useStore((state)=>state["Home"]["image"]);
const imageIoProps = useIoStore((state)=>state["Home"]["image"]);
const imageCb = useimageCb()
const trustedsectionProps = useStore((state)=>state["Home"]["trustedsection"]);
const trustedsectionIoProps = useIoStore((state)=>state["Home"]["trustedsection"]);
const trustedsectionCb = usetrustedsectionCb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const servicesectionProps = useStore((state)=>state["Home"]["servicesection"]);
const servicesectionIoProps = useIoStore((state)=>state["Home"]["servicesection"]);
const servicesectionCb = useservicesectionCb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const projectsectionProps = useStore((state)=>state["Home"]["projectsection"]);
const projectsectionIoProps = useIoStore((state)=>state["Home"]["projectsection"]);
const projectsectionCb = useprojectsectionCb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const bolgsectionProps = useStore((state)=>state["Home"]["bolgsection"]);
const bolgsectionIoProps = useIoStore((state)=>state["Home"]["bolgsection"]);
const bolgsectionCb = usebolgsectionCb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const box1Props = useStore((state)=>state["Home"]["box1"]);
const box1IoProps = useIoStore((state)=>state["Home"]["box1"]);
const box1Cb = usebox1Cb()
const dateProps = useStore((state)=>state["Home"]["date"]);
const dateIoProps = useIoStore((state)=>state["Home"]["date"]);
const dateCb = usedateCb()
const readProps = useStore((state)=>state["Home"]["read"]);
const readIoProps = useIoStore((state)=>state["Home"]["read"]);
const readCb = usereadCb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const productsectionProps = useStore((state)=>state["Home"]["productsection"]);
const productsectionIoProps = useIoStore((state)=>state["Home"]["productsection"]);
const productsectionCb = useproductsectionCb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const imagesProps = useStore((state)=>state["Home"]["images"]);
const imagesIoProps = useIoStore((state)=>state["Home"]["images"]);
const imagesCb = useimagesCb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const worksectionProps = useStore((state)=>state["Home"]["worksection"]);
const worksectionIoProps = useIoStore((state)=>state["Home"]["worksection"]);
const worksectionCb = useworksectionCb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const standfordboxProps = useStore((state)=>state["Home"]["standfordbox"]);
const standfordboxIoProps = useIoStore((state)=>state["Home"]["standfordbox"]);
const standfordboxCb = usestandfordboxCb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const testimonialsectionProps = useStore((state)=>state["Home"]["testimonialsection"]);
const testimonialsectionIoProps = useIoStore((state)=>state["Home"]["testimonialsection"]);
const testimonialsectionCb = usetestimonialsectionCb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const serviceProps = useStore((state)=>state["Home"]["service"]);
const serviceIoProps = useIoStore((state)=>state["Home"]["service"]);
const serviceCb = useserviceCb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const bookacallProps = useStore((state)=>state["Home"]["bookacall"]);
const bookacallIoProps = useIoStore((state)=>state["Home"]["bookacall"]);
const bookacallCb = usebookacallCb()
const arrowProps = useStore((state)=>state["Home"]["arrow"]);
const arrowIoProps = useIoStore((state)=>state["Home"]["arrow"]);
const arrowCb = usearrowCb()
const subtextProps = useStore((state)=>state["Home"]["subtext"]);
const subtextIoProps = useIoStore((state)=>state["Home"]["subtext"]);
const subtextCb = usesubtextCb()
const text2Props = useStore((state)=>state["Home"]["text2"]);
const text2IoProps = useIoStore((state)=>state["Home"]["text2"]);
const text2Cb = usetext2Cb()
const text1Props = useStore((state)=>state["Home"]["text1"]);
const text1IoProps = useIoStore((state)=>state["Home"]["text1"]);
const text1Cb = usetext1Cb()
const downloadProps = useStore((state)=>state["Home"]["download"]);
const downloadIoProps = useIoStore((state)=>state["Home"]["download"]);
const downloadCb = usedownloadCb()
const bookacallbuttonProps = useStore((state)=>state["Home"]["bookacallbutton"]);
const bookacallbuttonIoProps = useIoStore((state)=>state["Home"]["bookacallbutton"]);
const bookacallbuttonCb = usebookacallbuttonCb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const personimgProps = useStore((state)=>state["Home"]["personimg"]);
const personimgIoProps = useIoStore((state)=>state["Home"]["personimg"]);
const personimgCb = usepersonimgCb()
const Trusted_byProps = useStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byIoProps = useIoStore((state)=>state["Home"]["Trusted_by"]);
const Trusted_byCb = useTrusted_byCb()
const logoispum1Props = useStore((state)=>state["Home"]["logoispum1"]);
const logoispum1IoProps = useIoStore((state)=>state["Home"]["logoispum1"]);
const logoispum1Cb = uselogoispum1Cb()
const logoispum2Props = useStore((state)=>state["Home"]["logoispum2"]);
const logoispum2IoProps = useIoStore((state)=>state["Home"]["logoispum2"]);
const logoispum2Cb = uselogoispum2Cb()
const logoispum3Props = useStore((state)=>state["Home"]["logoispum3"]);
const logoispum3IoProps = useIoStore((state)=>state["Home"]["logoispum3"]);
const logoispum3Cb = uselogoispum3Cb()
const logoispum4Props = useStore((state)=>state["Home"]["logoispum4"]);
const logoispum4IoProps = useIoStore((state)=>state["Home"]["logoispum4"]);
const logoispum4Cb = uselogoispum4Cb()
const SERVICESProps = useStore((state)=>state["Home"]["SERVICES"]);
const SERVICESIoProps = useIoStore((state)=>state["Home"]["SERVICES"]);
const SERVICESCb = useSERVICESCb()
const servicesubtextProps = useStore((state)=>state["Home"]["servicesubtext"]);
const servicesubtextIoProps = useIoStore((state)=>state["Home"]["servicesubtext"]);
const servicesubtextCb = useservicesubtextCb()
const box1titlteProps = useStore((state)=>state["Home"]["box1titlte"]);
const box1titlteIoProps = useIoStore((state)=>state["Home"]["box1titlte"]);
const box1titlteCb = usebox1titlteCb()
const box1subtextProps = useStore((state)=>state["Home"]["box1subtext"]);
const box1subtextIoProps = useIoStore((state)=>state["Home"]["box1subtext"]);
const box1subtextCb = usebox1subtextCb()
const serviceimg1Props = useStore((state)=>state["Home"]["serviceimg1"]);
const serviceimg1IoProps = useIoStore((state)=>state["Home"]["serviceimg1"]);
const serviceimg1Cb = useserviceimg1Cb()
const DesignProps = useStore((state)=>state["Home"]["Design"]);
const DesignIoProps = useIoStore((state)=>state["Home"]["Design"]);
const DesignCb = useDesignCb()
const FrontProps = useStore((state)=>state["Home"]["Front"]);
const FrontIoProps = useIoStore((state)=>state["Home"]["Front"]);
const FrontCb = useFrontCb()
const WebProps = useStore((state)=>state["Home"]["Web"]);
const WebIoProps = useIoStore((state)=>state["Home"]["Web"]);
const WebCb = useWebCb()
const box2subtextProps = useStore((state)=>state["Home"]["box2subtext"]);
const box2subtextIoProps = useIoStore((state)=>state["Home"]["box2subtext"]);
const box2subtextCb = usebox2subtextCb()
const box2titlteProps = useStore((state)=>state["Home"]["box2titlte"]);
const box2titlteIoProps = useIoStore((state)=>state["Home"]["box2titlte"]);
const box2titlteCb = usebox2titlteCb()
const WebflowProps = useStore((state)=>state["Home"]["Webflow"]);
const WebflowIoProps = useIoStore((state)=>state["Home"]["Webflow"]);
const WebflowCb = useWebflowCb()
const FigmaProps = useStore((state)=>state["Home"]["Figma"]);
const FigmaIoProps = useIoStore((state)=>state["Home"]["Figma"]);
const FigmaCb = useFigmaCb()
const _SketchProps = useStore((state)=>state["Home"]["_Sketch"]);
const _SketchIoProps = useIoStore((state)=>state["Home"]["_Sketch"]);
const _SketchCb = use_SketchCb()
const serviceimg2Props = useStore((state)=>state["Home"]["serviceimg2"]);
const serviceimg2IoProps = useIoStore((state)=>state["Home"]["serviceimg2"]);
const serviceimg2Cb = useserviceimg2Cb()
const box3subtextProps = useStore((state)=>state["Home"]["box3subtext"]);
const box3subtextIoProps = useIoStore((state)=>state["Home"]["box3subtext"]);
const box3subtextCb = usebox3subtextCb()
const box3titlteProps = useStore((state)=>state["Home"]["box3titlte"]);
const box3titlteIoProps = useIoStore((state)=>state["Home"]["box3titlte"]);
const box3titlteCb = usebox3titlteCb()
const deviceProps = useStore((state)=>state["Home"]["device"]);
const deviceIoProps = useIoStore((state)=>state["Home"]["device"]);
const deviceCb = usedeviceCb()
const EfficientProps = useStore((state)=>state["Home"]["Efficient"]);
const EfficientIoProps = useIoStore((state)=>state["Home"]["Efficient"]);
const EfficientCb = useEfficientCb()
const cleanProps = useStore((state)=>state["Home"]["clean"]);
const cleanIoProps = useIoStore((state)=>state["Home"]["clean"]);
const cleanCb = usecleanCb()
const serviceimg3Props = useStore((state)=>state["Home"]["serviceimg3"]);
const serviceimg3IoProps = useIoStore((state)=>state["Home"]["serviceimg3"]);
const serviceimg3Cb = useserviceimg3Cb()
const PROJECTSProps = useStore((state)=>state["Home"]["PROJECTS"]);
const PROJECTSIoProps = useIoStore((state)=>state["Home"]["PROJECTS"]);
const PROJECTSCb = usePROJECTSCb()
const IbringresultsProps = useStore((state)=>state["Home"]["Ibringresults"]);
const IbringresultsIoProps = useIoStore((state)=>state["Home"]["Ibringresults"]);
const IbringresultsCb = useIbringresultsCb()
const MyclientsareproofProps = useStore((state)=>state["Home"]["Myclientsareproof"]);
const MyclientsareproofIoProps = useIoStore((state)=>state["Home"]["Myclientsareproof"]);
const MyclientsareproofCb = useMyclientsareproofCb()
const ViewProps = useStore((state)=>state["Home"]["View"]);
const ViewIoProps = useIoStore((state)=>state["Home"]["View"]);
const ViewCb = useViewCb()
const BRANDINGProps = useStore((state)=>state["Home"]["BRANDING"]);
const BRANDINGIoProps = useIoStore((state)=>state["Home"]["BRANDING"]);
const BRANDINGCb = useBRANDINGCb()
const SoulfulRebrandProps = useStore((state)=>state["Home"]["SoulfulRebrand"]);
const SoulfulRebrandIoProps = useIoStore((state)=>state["Home"]["SoulfulRebrand"]);
const SoulfulRebrandCb = useSoulfulRebrandCb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const BLOGSProps = useStore((state)=>state["Home"]["BLOGS"]);
const BLOGSIoProps = useIoStore((state)=>state["Home"]["BLOGS"]);
const BLOGSCb = useBLOGSCb()
const LatestProps = useStore((state)=>state["Home"]["Latest"]);
const LatestIoProps = useIoStore((state)=>state["Home"]["Latest"]);
const LatestCb = useLatestCb()
const viewallProps = useStore((state)=>state["Home"]["viewall"]);
const viewallIoProps = useIoStore((state)=>state["Home"]["viewall"]);
const viewallCb = useviewallCb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const PRODUCT_DESIGNERProps = useStore((state)=>state["Home"]["PRODUCT_DESIGNER"]);
const PRODUCT_DESIGNERIoProps = useIoStore((state)=>state["Home"]["PRODUCT_DESIGNER"]);
const PRODUCT_DESIGNERCb = usePRODUCT_DESIGNERCb()
const ThatmeProps = useStore((state)=>state["Home"]["Thatme"]);
const ThatmeIoProps = useIoStore((state)=>state["Home"]["Thatme"]);
const ThatmeCb = useThatmeCb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const StanfordProps = useStore((state)=>state["Home"]["Stanford"]);
const StanfordIoProps = useIoStore((state)=>state["Home"]["Stanford"]);
const StanfordCb = useStanfordCb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TESTIMONIALSProps = useStore((state)=>state["Home"]["TESTIMONIALS"]);
const TESTIMONIALSIoProps = useIoStore((state)=>state["Home"]["TESTIMONIALS"]);
const TESTIMONIALSCb = useTESTIMONIALSCb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const ReadyProps = useStore((state)=>state["Home"]["Ready"]);
const ReadyIoProps = useIoStore((state)=>state["Home"]["Ready"]);
const ReadyCb = useReadyCb()
const callProps = useStore((state)=>state["Home"]["call"]);
const callIoProps = useIoStore((state)=>state["Home"]["call"]);
const callCb = usecallCb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()

  return (<>
  <Flex className="p-Home navbar bpt" {...navbarProps} {...navbarCb} {...navbarIoProps}>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Image className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}/>
</Div>
<Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<TextBox className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<TextBox className="p-Home service bpt" {...serviceProps} {...serviceCb} {...serviceIoProps}/>
<TextBox className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}/>
<TextBox className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<TextBox className="p-Home bookacall bpt" {...bookacallProps} {...bookacallCb} {...bookacallIoProps}/>
<Image className="p-Home arrow bpt" {...arrowProps} {...arrowCb} {...arrowIoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home start bpt" {...startProps} {...startCb} {...startIoProps}>
<Div className="p-Home text bpt" {...textProps} {...textCb} {...textIoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<TextBox className="p-Home text1 bpt" {...text1Props} {...text1Cb} {...text1IoProps}/>
</Flex>
<TextBox className="p-Home text2 bpt" {...text2Props} {...text2Cb} {...text2IoProps}/>
<TextBox className="p-Home subtext bpt" {...subtextProps} {...subtextCb} {...subtextIoProps}/>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Button className="p-Home bookacallbutton bpt" {...bookacallbuttonProps} {...bookacallbuttonCb} {...bookacallbuttonIoProps}/>
<TextBox className="p-Home download bpt" {...downloadProps} {...downloadCb} {...downloadIoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
</Div>
<Div className="p-Home image bpt" {...imageProps} {...imageCb} {...imageIoProps}>
<Image className="p-Home personimg bpt" {...personimgProps} {...personimgCb} {...personimgIoProps}/>
</Div>
</Flex>
<Flex className="p-Home trustedsection bpt" {...trustedsectionProps} {...trustedsectionCb} {...trustedsectionIoProps}>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox className="p-Home Trusted_by bpt" {...Trusted_byProps} {...Trusted_byCb} {...Trusted_byIoProps}/>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image className="p-Home logoispum1 bpt" {...logoispum1Props} {...logoispum1Cb} {...logoispum1IoProps}/>
<Image className="p-Home logoispum2 bpt" {...logoispum2Props} {...logoispum2Cb} {...logoispum2IoProps}/>
<Image className="p-Home logoispum3 bpt" {...logoispum3Props} {...logoispum3Cb} {...logoispum3IoProps}/>
<Image className="p-Home logoispum4 bpt" {...logoispum4Props} {...logoispum4Cb} {...logoispum4IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home servicesection bpt" {...servicesectionProps} {...servicesectionCb} {...servicesectionIoProps}>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home SERVICES bpt" {...SERVICESProps} {...SERVICESCb} {...SERVICESIoProps}/>
<TextBox className="p-Home servicesubtext bpt" {...servicesubtextProps} {...servicesubtextCb} {...servicesubtextIoProps}/>
</Div>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Image className="p-Home serviceimg1 bpt" {...serviceimg1Props} {...serviceimg1Cb} {...serviceimg1IoProps}/>
</Div>
<TextBox className="p-Home box1titlte bpt" {...box1titlteProps} {...box1titlteCb} {...box1titlteIoProps}/>
<TextBox className="p-Home box1subtext bpt" {...box1subtextProps} {...box1subtextCb} {...box1subtextIoProps}/>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home Design bpt" {...DesignProps} {...DesignCb} {...DesignIoProps}/>
<TextBox className="p-Home Web bpt" {...WebProps} {...WebCb} {...WebIoProps}/>
<TextBox className="p-Home Front bpt" {...FrontProps} {...FrontCb} {...FrontIoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-Home serviceimg2 bpt" {...serviceimg2Props} {...serviceimg2Cb} {...serviceimg2IoProps}/>
</Div>
<TextBox className="p-Home box2titlte bpt" {...box2titlteProps} {...box2titlteCb} {...box2titlteIoProps}/>
<TextBox className="p-Home box2subtext bpt" {...box2subtextProps} {...box2subtextCb} {...box2subtextIoProps}/>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<TextBox className="p-Home _Sketch bpt" {..._SketchProps} {..._SketchCb} {..._SketchIoProps}/>
<TextBox className="p-Home Webflow bpt" {...WebflowProps} {...WebflowCb} {...WebflowIoProps}/>
<TextBox className="p-Home Figma bpt" {...FigmaProps} {...FigmaCb} {...FigmaIoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image className="p-Home serviceimg3 bpt" {...serviceimg3Props} {...serviceimg3Cb} {...serviceimg3IoProps}/>
</Div>
<TextBox className="p-Home box3titlte bpt" {...box3titlteProps} {...box3titlteCb} {...box3titlteIoProps}/>
<TextBox className="p-Home box3subtext bpt" {...box3subtextProps} {...box3subtextCb} {...box3subtextIoProps}/>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox className="p-Home clean bpt" {...cleanProps} {...cleanCb} {...cleanIoProps}/>
<TextBox className="p-Home device bpt" {...deviceProps} {...deviceCb} {...deviceIoProps}/>
<TextBox className="p-Home Efficient bpt" {...EfficientProps} {...EfficientCb} {...EfficientIoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
<Flex className="p-Home projectsection bpt" {...projectsectionProps} {...projectsectionCb} {...projectsectionIoProps}>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home PROJECTS bpt" {...PROJECTSProps} {...PROJECTSCb} {...PROJECTSIoProps}/>
<TextBox className="p-Home Ibringresults bpt" {...IbringresultsProps} {...IbringresultsCb} {...IbringresultsIoProps}/>
<TextBox className="p-Home Myclientsareproof bpt" {...MyclientsareproofProps} {...MyclientsareproofCb} {...MyclientsareproofIoProps}/>
</Div>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Button className="p-Home View bpt" {...ViewProps} {...ViewCb} {...ViewIoProps}/>
</Div>
</Flex>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Div>
<TextBox className="p-Home BRANDING bpt" {...BRANDINGProps} {...BRANDINGCb} {...BRANDINGIoProps}/>
<TextBox className="p-Home SoulfulRebrand bpt" {...SoulfulRebrandProps} {...SoulfulRebrandCb} {...SoulfulRebrandIoProps}/>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Div>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Div>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home bolgsection bpt" {...bolgsectionProps} {...bolgsectionCb} {...bolgsectionIoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<TextBox className="p-Home BLOGS bpt" {...BLOGSProps} {...BLOGSCb} {...BLOGSIoProps}/>
<TextBox className="p-Home Latest bpt" {...LatestProps} {...LatestCb} {...LatestIoProps}/>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<TextBox className="p-Home viewall bpt" {...viewallProps} {...viewallCb} {...viewallIoProps}/>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Flex className="p-Home box1 bpt" {...box1Props} {...box1Cb} {...box1IoProps}>
<Flex className="p-Home date bpt" {...dateProps} {...dateCb} {...dateIoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Flex className="p-Home read bpt" {...readProps} {...readCb} {...readIoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Flex>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Flex>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
<Flex className="p-Home productsection bpt" {...productsectionProps} {...productsectionCb} {...productsectionIoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<TextBox className="p-Home PRODUCT_DESIGNER bpt" {...PRODUCT_DESIGNERProps} {...PRODUCT_DESIGNERCb} {...PRODUCT_DESIGNERIoProps}/>
<TextBox className="p-Home Thatme bpt" {...ThatmeProps} {...ThatmeCb} {...ThatmeIoProps}/>
</Div>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
</Flex>
<Div className="p-Home images bpt" {...imagesProps} {...imagesCb} {...imagesIoProps}>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home worksection bpt" {...worksectionProps} {...worksectionCb} {...worksectionIoProps}>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<TextBox className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}/>
<Flex className="p-Home standfordbox bpt" {...standfordboxProps} {...standfordboxCb} {...standfordboxIoProps}>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home Stanford bpt" {...StanfordProps} {...StanfordCb} {...StanfordIoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
</Flex>
<Flex className="p-Home testimonialsection bpt" {...testimonialsectionProps} {...testimonialsectionCb} {...testimonialsectionIoProps}>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<TextBox className="p-Home TESTIMONIALS bpt" {...TESTIMONIALSProps} {...TESTIMONIALSCb} {...TESTIMONIALSIoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Div>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
</Div>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Div>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<TextBox className="p-Home Ready bpt" {...ReadyProps} {...ReadyCb} {...ReadyIoProps}/>
<TextBox className="p-Home call bpt" {...callProps} {...callCb} {...callIoProps}/>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
</Div>
  </>);
}
