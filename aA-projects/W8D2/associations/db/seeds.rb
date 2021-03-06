ActiveRecord::Base.transaction do
  User.destroy_all
  user1 = User.create!(name: 'CJ')
  user2 = User.create!(name: 'Flarnie')
  user3 = User.create!(name: 'Jeff')
  user4 = User.create!(name: 'Georges St. Pierre')
  user5 = User.create!(name: 'Ned')

  Course.destroy_all
  course1 = Course.create!(name: 'Ruby 101', instructor_id: user5.id)#, prereq_id: nil)
  course2 = Course.create!(name: 'Ruby 102', instructor_id: user5.id, prereq_id: course1.id)
  course3 = Course.create!(name: 'Ruby 103', instructor_id: user1.id, prereq_id: course2.id)
  course4 = Course.create!(name: 'Ruby 104', instructor_id: user3.id, prereq_id: course3.id)
  course5 = Course.create!(name: 'Database 101', instructor_id: user2.id, prereq_id: course3.id)
  course6 = Course.create!(name: 'Database 102', instructor_id: user3.id, prereq_id: course5.id)

  Enrollment.destroy_all
  Enrollment.create!(student_id: user3.id, course_id: course1.id)
  Enrollment.create!(student_id: user4.id, course_id: course1.id)
  Enrollment.create!(student_id: user1.id, course_id: course2.id)
  Enrollment.create!(student_id: user2.id, course_id: course2.id)
end
