import React, { useContext, useState } from 'react';

interface ILayout {
    title: string,
    setTitle: (flag: string) => void,
    open: boolean,
    setopen: (flag: boolean) => void,
    isLoading: boolean,
    setLoading: (flag: boolean) => void,
    openModal: boolean,
    setOpenModal: (flag: boolean) => void,
    displayButton: boolean,
    setdisplayButton: (flag: boolean) => void,
    openBackbtn:boolean,
    setOpenBackbtn: (flag: boolean) => void,
    openSignUpModel:boolean,
    setOpenSignUpModel: (flag: boolean) => void,
    drawerWidth :number
};

const initialValues: ILayout = {
    title: "",
    setTitle: () => { },
    open: false,
    setopen: () => { },
    isLoading: false,
    setLoading: () => { },
    openModal: false,
    setOpenModal: () => { },
    displayButton: false,
    setdisplayButton: () => { },
    openBackbtn:false,
    setOpenBackbtn: () => { },
    openSignUpModel:false,
    setOpenSignUpModel: () => { },
    drawerWidth:240
};

const layoutContexts = React.createContext<ILayout>(initialValues);

const LayoutContext: React.FC<{}> = ({ children }: React.PropsWithChildren<{}>) => {

    const [title, setTitle] = useState<string>("Index");
    const [open, setopen] = useState<boolean>(false);
    const [openBackbtn, setOpenBackbtn] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [displayButton, setdisplayButton] = useState<boolean>(false);
    const[openSignUpModel,setOpenSignUpModel]=useState<boolean>(false);
    const drawerWidth = 240;

    const values: ILayout = {
        title,
        setTitle,
        open,
        setopen,
        isLoading,
        setLoading,
        openModal,
        setOpenModal,
        displayButton,
        setdisplayButton,
        openBackbtn,
        setOpenBackbtn,
        openSignUpModel,
        setOpenSignUpModel,
        drawerWidth
    }
    return (
        <layoutContexts.Provider value={values}>
            {children}
        </layoutContexts.Provider>
    )
}
export default LayoutContext;

export const useLayoutContext = () => {
    return useContext(layoutContexts);
}