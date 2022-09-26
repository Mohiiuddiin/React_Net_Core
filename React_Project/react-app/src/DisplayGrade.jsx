export default function DisplayGrade(props: displayGradeProps) {

    function display(grade: Number) {
        if (grade > 90) {
            return (
                <div>
                    <h3>Excellent Job</h3>
                </div>
            )
        }
        else if (grade <= 90 && grade > 80) {
            return (
                <div>
                    <h3>Well Done</h3>
                </div>
            )
        }
        else if (grade >= 0 && grade <= 80) {
            return (
                <div>
                    <h3>Better Luck Next Time</h3>
                </div>
            )
        } else {
            throw 'this is impossible';
        }
    }

    return (
        <>
            {display(props.grade)}
        </>
    )
}


interface displayGradeProps {
    grade: Number;
}