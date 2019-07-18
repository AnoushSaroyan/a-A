# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

    has_many :enrollments,
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :Enrollment

    has_many :enrolled_courses,
        through: :enrollments,
        source: :course 

    has_many :taught_courses,
        primary_key: :id,
        foreign_key: :instructor_id,
        class_name: :Course

     has_many :taught_students,
        through: :taught_courses,
        source: :enrolled_students

     has_many :instructors, 
        through: :enrolled_courses,
        source: :instructor

     has_many :students_with_common_instructors,
        through: :instructors,
        source: :taught_students

end