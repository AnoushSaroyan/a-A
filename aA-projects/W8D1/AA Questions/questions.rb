require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')

        self.type_translation = true
        self.results_as_hash = true
    end     
end    


class User 
    attr_accessor :id, :fname, :lname

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM users")
        data.map { |record| User.new(record) }
    end

    def self.find_by_id(user_id)
        user = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT * FROM users
        WHERE id = ?
        SQL

        return nil if user.empty?
        User.new(user.first)
    end      

    def self.find_by_name(fname, lname)
        data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
        SELECT * FROM users
        WHERE fname = ? AND lname = ?
        SQL

        return nil if data.empty?
        User.new(data.first)
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end     

    def create
        raise "#{self} already in db" if self.id

        QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname)
        INSERT INTO users 
            (fname, lname)
        VALUES 
            (?, ?)        
        SQL

        self.id = QuestionsDatabase.instance.last_insert_row_id
    end    
    
    def update 
        raise "#{self} not in db" unless self.id 

        QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname, self.id)
        UPDATE users 
        SET fname = ?, lname =?
        WHERE id = ?
        SQL
    end   
    
    def authored_questions
        questions = Question.find_by_author_id(self.id)
        return nil if questions.empty?
        questions
    end

    def authored_replies
        data = Reply.find_by_user_id(self.id)
        return nil if data.empty?
        data
    end
end     


class Question 
    attr_accessor :id, :title, :body, :author_id

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions")
        data.map { |record| Question.new(record) }
    end

    def self.find_by_id(question_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, question_id)
        SELECT * FROM questions
        WHERE id = ?
        SQL

        return nil if question.empty?
        Question.new(question.first)
    end

    def self.find_by_author_id(author_id)
        questions = QuestionsDatabase.instance.execute(<<-SQL, author_id)
        SELECT * FROM questions
        WHERE author_id = ?
        SQL

        questions.map { |record| Question.new(record) }
    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end     

    def create
        raise "#{self} already in db" if self.id

        QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id)
        INSERT INTO questions 
            (title, body, author_id)
        VALUES 
            (?, ?, ?)        
        SQL

        self.id = QuestionsDatabase.instance.last_insert_row_id
    end    
    
    def update 
        raise "#{self} not in db" unless self.id 

        QuestionsDatabase.instance.execute(<<-SQL, self.title, self.body, self.author_id, self.id)
        UPDATE questions 
        SET title = ?, body = ?, author_id = ?
        WHERE id = ?
        SQL
    end

    def author
        raise "#{self} not in db" unless self.id
        User.find_by_id(self.author_id)
    end

    def replies
        Reply.find_by_question_id(self.id)
    end
end 


class QuestionFollow
    attr_accessor :id, :user_id, :question_id

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
        data.map { |record| QuestionFollow.new(record) }
    end     

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end     

    def create
        raise "#{self} already in db" if self.id

        QuestionsDatabase.instance.execute(<<-SQL, self.user_id, self.question_id)
        INSERT INTO question_follows 
            (user_id, question_id)
        VALUES 
            (?, ?)        
        SQL

        self.id = QuestionsDatabase.instance.last_insert_row_id
    end    
    

    def update 
        raise "#{self} not in db" unless self.id 

        QuestionsDatabase.instance.execute(<<-SQL, self.user_id, self.question_id, self.id)
        UPDATE question_follows 
        SET user_id = ?, question_id = ?
        WHERE id = ?
        SQL
    end
end 


class Reply
    attr_accessor :id, :body, :parent_reply_id, :user_id, :question_id

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies")
        data.map { |record| Reply.new(record) }
    end

    def self.find_by_id(reply_id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, reply_id)
        SELECT * FROM replies
        WHERE id = ?
        SQL

        return nil if reply.empty?
        Reply.new(reply.first)
    end   

    def self.find_by_user_id(user_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT * 
            FROM replies 
            WHERE user_id = ?
        SQL

        replies.map { |record| Reply.new(record) }
    end

    def self.find_by_question_id(question_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT * FROM replies 
            WHERE question_id = ?
        SQL
        
        replies.map { |record| Reply.new(record) }
    end

    def initialize(options)
        @id = options['id']
        @body = options['body']
        @parent_reply_id = options['parent_reply_id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end   
    
    def create
        raise "#{self} already in db" if self.id

        QuestionsDatabase.instance.execute(<<-SQL, self.body, self.parent_reply_id, self.user_id, self.question_id)
        INSERT INTO replies 
            (body, parent_reply_id, user_id, question_id)
        VALUES 
            (?, ?, ?, ?)        
        SQL

        self.id = QuestionsDatabase.instance.last_insert_row_id
    end    
    
    def update 
        raise "#{self} not in db" unless self.id 

        QuestionsDatabase.instance.execute(<<-SQL, self.body, self.parent_reply_id, self.user_id, self.question_id, self.id)
        UPDATE replies 
        SET body = ?, parent_reply_id = ?, user_id = ?, question_id = ?
        WHERE id = ?
        SQL
    end

    def author
        raise "#{self} not in db" unless self.id
        User.find_by_id(self.user_id)
    end

    def question
        Question.find_by_id(self.question_id)
    end

    def parent_reply
        Reply.find_by_id(self.parent_reply_id)
    end

    def child_replies
        replies = QuestionsDatabase.instance.execute(<<-SQL, self.id)
        SELECT * 
        FROM replies 
        WHERE parent_reply_id = ?
        SQL

        return nil if replies.empty?
        replies.map { |record| Reply.new(record) }
    end     
end


class QuestionLike
    attr_accessor :id, :user_id, :question_id

    def self.all
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
        data.map { |record| QuestionLike.new(record) }
    end     

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end

    def create
        raise "#{self} already in db" if self.id

        QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.user_id)
        INSERT INTO question_likes 
            (question_id, user_id)
        VALUES 
            (?, ?)        
        SQL

        self.id = QuestionsDatabase.instance.last_insert_row_id
    end    
    

    def update 
        raise "#{self} not in db" unless self.id 

        QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.user_id, self.id)
        UPDATE question_likes 
        SET question_id = ?, user_id = ?
        WHERE id = ?
        SQL
    end
end 