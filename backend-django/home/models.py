from django.db import models
from django.contrib.auth.models import User



#For Phase-1......................................................................
class Customer(models.Model):
    customer_id = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name}'
    



#For Phase-2......................................................................
class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'



class Blog(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)
    title = models.CharField(max_length=100)
    total_votes = models.IntegerField(default=0)
    vote_percentage = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.title}'
    
    @property
    def set_count(self):
        all_votes = self.review_set.all()
        all_votes_count = all_votes.count()

        up_votes = all_votes.filter(vote_type = 'up')
        up_votes_count = up_votes.count()

        percentage = (up_votes_count/all_votes_count)*100

        self.total_votes = all_votes_count
        self.vote_percentage = percentage

        self.save()




class Review(models.Model):
    VOTE_TYPE = (
        ('up', 'Up'),
        ('down', 'Down'),
    )

    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    voter = models.ForeignKey(User, on_delete=models.CASCADE)
    vote_type = models.CharField(max_length=100, choices=VOTE_TYPE)

    def __str__(self):
        return f"{self.blog}'s review"




