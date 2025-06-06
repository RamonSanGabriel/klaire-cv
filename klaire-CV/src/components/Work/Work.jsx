import css from './Work.module.css';
import {
  work,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
} from '../../data/work';

const Work = () => {
  return (
    <>
      <section>
        <ul>
          <h1 className={css.header}></h1>
          {work.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5,tasks6,tasks7,tasks8,tasks9,tasks10,
            }) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                  <p className={css.workListItem}>{tasks6}</p>
                  <p className={css.workListItem}>{tasks7}</p>
                  <p className={css.workListItem}>{tasks8}</p>
                  <p className={css.workListItem}>{tasks9}</p>
                  <p className={css.workListItem}>{tasks10}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>

        <ul>
          {work2.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5,tasks6,tasks7,tasks8,tasks9,
            }) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                  <p className={css.workListItem}>{tasks6}</p>
                  <p className={css.workListItem}>{tasks7}</p>
                  <p className={css.workListItem}>{tasks8}</p>
                  <p className={css.workListItem}>{tasks9}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>

        <ul>
          {work3.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5}) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>

        <ul>
          {work4.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5,tasks6}) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                  <p className={css.workListItem}>{tasks6}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>

        <ul>
          {work5.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5,tasks6
            }) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                  <p className={css.workListItem}>{tasks6}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>
        <ul>
          {work6.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5,tasks6,tasks7,tasks8,tasks9,tasks10,tasks11,tasks12,tasks13
            }) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                  <p className={css.workListItem}>{tasks6}</p>
                  <p className={css.workListItem}>{tasks7}</p>
                  <p className={css.workListItem}>{tasks8}</p>
                  <p className={css.workListItem}>{tasks9}</p>
                  <p className={css.workListItem}>{tasks10}</p>
                  <p className={css.workListItem}>{tasks11}</p>
                  <p className={css.workListItem}>{tasks12}</p>
                  <p className={css.workListItem}>{tasks13}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>
        <ul>
          {work7.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4,tasks5}) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                  <p className={css.workListItem}>{tasks5}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>
        <ul>
          {work8.map(
            // prettier-ignore
            ({id,position,company,duration,location,tasks1,tasks2,tasks3,tasks4}) => (
              <li className={css.workList} key={id}>
                <h3 className={css.position}>{position}</h3>
                <p className={css.company}>{company}</p>
                <p className={css.duration}>{duration}</p>
                <p className={css.location}>{location}</p>
                <div className={css.workListItemContainer}>
                  <p className={css.workListItem}>{tasks1}</p>
                  <p className={css.workListItem}>{tasks2}</p>
                  <p className={css.workListItem}>{tasks3}</p>
                  <p className={css.workListItem}>{tasks4}</p>
                </div>
                <hr />
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default Work;
