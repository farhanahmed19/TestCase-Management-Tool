from rest_framework import serializers
from ..models import TestCase, TypesForTestCase, PriorityForTestCase, TestCaseFile, TestCaseTicket

class TypesForTestCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypesForTestCase
        fields = '__all__'

class PriorityForTestCaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriorityForTestCase
        fields = '__all__'

class TestCaseFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCaseFile
        fields = '__all__'

class TestCaseTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCaseTicket
        fields = '__all__'

class TestCaseSerializer(serializers.ModelSerializer):
    files = TestCaseFileSerializer(many=True, read_only=True)
    tickets = TestCaseTicketSerializer(many=True, read_only=True)

    class Meta:
        model = TestCase
        fields = '__all__'

























