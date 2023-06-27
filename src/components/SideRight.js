import './SideRight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faSignsPost } from '@fortawesome/free-solid-svg-icons';

const SideRight = () => {
  return (
    <div className="SideRight">
      <div className="SideRightContainer">
        <div className="SideRight_Top">
          <div>The OverFlow Blog</div>
        </div>
        <div className="RightSide_Item">
          <div>
            <div>
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <div>
              Pair programing? We peek under the hood of Duet, Google’s coding
              assistant....
            </div>
          </div>
        </div>
        <div className="SideRight_Body">
          <div>Featured on Meta</div>
        </div>
        <div className="RightSide_Item">
          <div>
            <div>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div>Statement from SO: June 5, 2023 Moderator Action</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div>Stack Exchange Network Outage – June 15, 2023</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div>
              Does the policy change for AI-generated content affect users who
              (want to)...
            </div>
          </div>
        </div>
        <div className="SideRight_Bottom">
          <div>Hot Meta Posts</div>
        </div>
        <div className="RightSide_Item">
          <div>
            <div>
              <FontAwesomeIcon icon={faSignsPost} />
            </div>
            <div>SE staff testing AI formatting assistant?</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faSignsPost} />
            </div>
            <div>
              How should non-English answers with code be handled in the Low
              Quality...
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faSignsPost} />
            </div>
            <div>
              Can users be sanctioned for (admitting to) using SO{` ' `}s first
              AI...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideRight;
