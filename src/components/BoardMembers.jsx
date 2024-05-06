import React from 'react'
import amb3 from "../assets/amb3.jpg"
import rina from "../assets/rina.jpg"
import board from "../assets/board.jpg"
import ganga from "../assets/ganga gurung.jpg"
import suman from "../assets/suman 2.jpg"
import laxmi from "../assets/laxmi.jpeg"
import lochana from "../assets/lochana adhikari.jpg"
import nanda from "../assets/nanda.jpg"
import dhana from "../assets/dhana.jpg"

const BoardMembers = () => {
  return (
    <div>
      <div class="team-section">
            <div class="intro-line">Our board members</div>
        
            <div class="team-member">
                <img src={amb3} alt="Anjana K.C."/>
                <h3>Anjana K.C.</h3>
                <p>Chair Person</p>
            </div>
        
            <div class="team-members">

                <div class="row">

                    <div class="team-member">
                        <img src={rina} alt="Rina"/>
                        <h3>Rina Palikhe</h3>
                        <p>Deputy Chairperson</p>
                    </div>
        
                    <div class="team-member">
                        <img src={board} alt="Bandana"/>
                        <h3>Bandana Gurung</h3>
                        <p>General Secretary</p>
                    </div>
        
                    <div class="team-member">
                        <img src={ganga} alt="Ganga"/>
                        <h3>Ganga Gurung</h3>
                        <p>Secretary</p>
                    </div>
        
                    <div class="team-member">
                        <img src={suman} alt="Suman"/>
                        <h3>Suman K.C.</h3>
                        <p>Treasurer</p>
                    </div>
                </div>
        
 
                <div class="row">

                    <div class="team-member">
                        <img src={laxmi} alt="Laxmi"/>
                        <h3>Laxmi Sunar</h3>
                        <p>Member</p>
                    </div>
        
                    <div class="team-member">
                        <img src={lochana} alt="Lochana"/>
                        <h3>Lochana Adhikari</h3>
                        <p>Member</p>
                    </div>
        
                    <div class="team-member">
                        <img src={nanda} alt="Nanda"/>
                        <h3>Nanda Gurung</h3>
                        <p>Member</p>
                    </div>
        
                    <div class="team-member">
                        <img src={dhana} alt="Dhana"/>
                        <h3>Dhana Gharti Magar</h3>
                        <p>Member</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoardMembers