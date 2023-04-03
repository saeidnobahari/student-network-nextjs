import React from "react";
import { semibold } from '../../services/Fonts';
import { Text, ChoiceGroup, IChoiceGroupOption, IChoiceGroupOptionStyles, Icon, useTheme } from '@fluentui/react';
import { redirectToLink } from '../../services/Utils';
import { Container } from 'react-bootstrap';
import LocalizationService from "../../services/LocalizationService";
import Message from '../GenericComponents/Message';

interface Props { degreeInformations: any[] };

const DegreeInformations= (props: Props) => {
    const theme = useTheme();
    const locale = LocalizationService.strings();
    var language: string | undefined = LocalizationService.getLanguage();
    const iconProps: any = { fontSize: '24px' };

    const degreeInformations: any[] = props.degreeInformations;
    /* Workaround to not show selected choicegroup */
    const [selectedChoiceGroup, setSelectedChoiceGroup] = React.useState<string>("");
    const selectionChanged = (_ev?: React.FormEvent<HTMLElement | HTMLInputElement>, _option?: IChoiceGroupOption): void => { setSelectedChoiceGroup(""); }
     
    const options: IChoiceGroupOption[] = [];

    const itemSize = 100;
    const choiceGroupOptionsStyle: IChoiceGroupOptionStyles = {
        choiceFieldWrapper: {
            width: itemSize + "px",
            height: itemSize + "px"
        },
        labelWrapper: {
            maxWidth: itemSize / (3 / 4) + "px",
            height: "auto",
        },
        field: {
            height: "100%",
            padding: "0px"
        }
    };

    degreeInformations?.map((x) => {
        return options.push({ 
            key: x.name![language!], 
            text: x.name![language!], 
            styles: choiceGroupOptionsStyle, 
            iconProps: { iconName: x.icon!, className: iconProps, color: theme.palette.themePrimary }, 
            onClick: () => {redirectToLink(x.link!)} 
        });
    });

    return (   
        <div className='degree-informations mb-4'>
            <div className="pb-2 pt-2 mb-4" style={{ backgroundColor: theme.palette.neutralLight }}>
                <Container>
                    <div><Text variant="medium" styles={semibold}><Icon iconName="AiOutlineLink" /> {locale?.courses.availableRedirects}</Text></div>
                </Container>
            </div>

            {
                options.length === 0 ? <Message text={locale?.noRedirectsAvailable!} />
                :
                <div className="text-center justify-content-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <ChoiceGroup options={options} onChange={selectionChanged} selectedKey={selectedChoiceGroup} />
                </div>
            }
        </div>
    );
};

export default DegreeInformations;