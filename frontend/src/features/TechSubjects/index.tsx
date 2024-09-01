import {useMemo, memo} from "preact/compat";
import {details} from "../../config";
import {TechSubject} from "../../entities";

function TechSubjects({
  ids
}: {
  ids: number[];
}) {

  const subjects = useMemo(() => {
    return details.filter(detail => ids.includes(detail.id));
  }, [ids]);

  return (
    <div className="tech-subjects">
      {subjects.map(subject => <TechSubject id={subject.id} name={subject.title} degree={subject.degree} />)}
    </div>
  );

};

export default memo(TechSubjects);
