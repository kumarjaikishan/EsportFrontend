import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import EditIcon from '@mui/icons-material/Edit';
import PhotoIcon from '@mui/icons-material/Photo';
import group from '../../../assets/group.webp'
import group1 from '../../../assets/group1.webp'
import user from '../../../assets/user.webp'

const Teamlists = ({ teamarray, statuschange, callfrom, deletee, edetee, showss, decline }) => {
    const hgfh = (ide) => {
        decline(ide)
    }
    useEffect(()=>{
        // console.log(teamarray);
    })
    return (<>
        {teamarray.length > 0 && teamarray.map((player, ind) => {
            return (<Accordion key={ind}
                style={{ borderRadius: "10px", overflow: "hidden" }}
                sx={{ mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`header ${player.status}`}
                // style={{ borderRight: "8px solid orange" }}
                >
                     <img src={player.logo ?player.logo :group} alt="" /> 
                    <span>{player.name} </span>
                    <span style={{fontSize:'14px', fontWeight:'400', textTransform:'capitalize'}}>-{player.os || 'N/A'}</span>
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <div className="teamdata">
                        <div className='imageside'>
                        <img src={player.logo ?player.logo :group1} alt="" /> 
                            <div className="icon">
                                <a href={`mailto:${player.email}`} target="_blank" ><MailOutlineIcon titleAccess='Email' /></a>
                                <a href={`tel:${player.mobile}`} target="_blank" ><PhoneEnabledIcon titleAccess='Phone' /></a>
                                <a href={`https://wa.me/+91${player.mobile}`} target="_blank" ><WhatsAppIcon titleAccess='Whatsapp' /></a>
                                {player.paymentss && <PhotoIcon color='primary' titleAccess='Show ScreenShot' onClick={() => showss(player.paymentss)} />}
                            </div>
                        </div>
                        <div className='teamside'>
                            <span> <span>Name</span> : <span>{player.name || 'N/A'}</span></span>
                           {player.email && <span> <span>Email</span> : <span>{player.email}</span></span>} 
                            <span> <span>Phone</span> : <span>{player.mobile || 'N/A'}</span></span>
                           {player.discord && <span> <span>Discord</span> : <span>{player.discord}</span></span>} 
                            <span> <span>O.S</span> : <span>{player.os || 'N/A'}</span></span>
                            <span> <span>Device</span> : <span>{player.device || 'N/A'}</span></span>
                            <span> <span>FPS</span> : <span>{player.fps || 'N/A'}</span></span>
                            <span> <span>UTR No.</span> : <span>{player.utrno || 'N/A'}</span></span>
                        </div>
                        
                    </div>
                    <div className="playerdata">
                        <div>
                            {callfrom == "pending" && <>
                                <Button onClick={() => statuschange(player._id, "approved")} color="success" variant="outlined" startIcon={<ThumbUpAltIcon />}>
                                    Approve
                                </Button>
                                <Button color='error' onClick={() => hgfh(player._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                    Reject
                                </Button>
                            </>}
                            {callfrom == "Approved" && <>
                                <Button onClick={() => statuschange(player._id, "pending")} color="warning" variant="outlined" startIcon={<UndoIcon />}>
                                    Pending
                                </Button>
                                <Button color='error' onClick={() => hgfh(player._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                    Reject
                                </Button>
                            </>}
                            {callfrom == "Rejected" && <>
                                <Button onClick={() => statuschange(player._id, "pending")} color="warning" variant="outlined" startIcon={<UndoIcon />}>
                                    Pending
                                </Button>
                                <Button onClick={() => statuschange(player._id, "approved")} color="success" variant="outlined" startIcon={<ThumbUpAltIcon />}>
                                    Approve
                                </Button>
                            </>}
                            {callfrom == "manageteam" && <>
                                <Button color='error' onClick={() => deletee(player._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                                <Button color="primary" onClick={() => edetee(player)} variant="outlined" startIcon={<EditIcon />}>
                                    Edit
                                </Button>
                            </>}

                        </div>
                    </div>
                    
                </AccordionDetails>
                {player.status == "rejected" && <TextField
                    id="outlined-multiline-flexible"
                    label="Reason of Rejection  .."
                    multiline
                    color="error"
                    focused
                    inputProps={{ style: { fontSize: 14 } }}
                    InputLabelProps={{ style: { fontSize: 18 } }}
                    value={player.reason || "your Fault"}
                    maxRows={6}
                    sx={{ minWidth: "96%", mb: 1, ml: 1 }}
                />}
            </Accordion>)
        })}
    </>);
};

export default Teamlists;